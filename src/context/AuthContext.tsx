import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { safeStorage } from '../lib/storage';

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

    // Use firebase auth state listener as primary source of truth
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (!isMounted) return;

      if (u) {
        setUser({
          uid: u.uid,
          email: u.email,
          displayName: u.displayName || 'Authorized Admin',
          role: 'Administrator',
          isCustom: false,
        });
      } else {
        // Fallback to custom local user only if there's no active Firebase user
        const stored = safeStorage.getLocal('oneroof_custom_user');
        if (stored) {
          try {
            setUser(JSON.parse(stored));
          } catch (e) {
            safeStorage.removeLocal('oneroof_custom_user');
            setUser(null);
          }
        } else {
          setUser(null);
        }
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
    const custom: CustomUser = {
      uid: 'custom-' + Math.random().toString(36).substring(2, 9),
      email: email,
      displayName: 'Oneroof Custom Admin',
      role: role,
      isCustom: true,
    };
    safeStorage.setLocal('oneroof_custom_user', JSON.stringify(custom));
    setUser(custom);
  };

  const logout = async () => {
    safeStorage.removeLocal('oneroof_custom_user');
    await signOut(auth);
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
