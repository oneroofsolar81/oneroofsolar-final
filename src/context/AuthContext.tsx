import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

export interface CustomUser {
  uid: string;
  email: string | null;
  displayName?: string | null;
  role?: string;
  isCustom?: boolean;
}

interface AuthContextType {
  user: CustomUser | null;
  loading: boolean;
  loginCustomUser: (email: string, role?: string) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  loginCustomUser: () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<CustomUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // Check localStorage first
    const savedCustomUser = localStorage.getItem('oneroof_custom_user');
    if (savedCustomUser) {
      try {
        const parsed = JSON.parse(savedCustomUser);
        if (parsed && parsed.email) {
          setUser(parsed);
          setLoading(false);
          return;
        }
      } catch (e) {
        console.error('Failed to parse oneroof_custom_user', e);
      }
    }

    // fallback to Firebase auth listener
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (!isMounted) return;

      const hasCustom = localStorage.getItem('oneroof_custom_user');
      if (hasCustom) {
        setLoading(false);
        return;
      }

      if (u) {
        setUser({
          uid: u.uid,
          email: u.email,
          displayName: u.displayName || 'Authorized Admin',
          role: u.email === 'editor@oneroofsolar.com.au' ? 'Editor' : 'Administrator',
          isCustom: true,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    }, (error) => {
      console.error("Auth helper error:", error);
      if (isMounted) {
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const loginCustomUser = (email: string, role: string = 'Administrator') => {
    const customUser: CustomUser = {
      uid: 'custom-' + Math.random().toString(36).substr(2, 9),
      email: email,
      displayName: email.split('@')[0],
      role: role,
      isCustom: true
    };
    localStorage.setItem('oneroof_custom_user', JSON.stringify(customUser));
    setUser(customUser);
  };

  const logout = async () => {
    localStorage.removeItem('oneroof_custom_user');
    try {
      await signOut(auth);
    } catch (e) {
      console.warn("Firebase signout error:", e);
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginCustomUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
