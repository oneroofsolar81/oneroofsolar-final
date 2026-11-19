import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// NOTE: Firebase is intentionally NOT imported statically here. Importing it at
// module load would pull the ~450KB Firebase chunk onto every page (Auth wraps
// the whole app). Admin sign-in uses a localStorage "custom user", so public
// visitors never need Firebase. It is now loaded dynamically only when an admin
// session is possible (an /admin route) or on logout.

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
    let unsubscribe: (() => void) | undefined;

    // Check localStorage first — this is how admins actually sign in, so public
    // visitors resolve instantly with zero Firebase code downloaded.
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

    // No custom session: treat as logged out immediately (no render blocking).
    setLoading(false);

    // Only bother with the Firebase auth listener inside the admin area, where a
    // real Firebase session could exist. This keeps the Firebase chunk off every
    // public/marketing page entirely.
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/admin')) {
      (async () => {
        try {
          const [{ auth }, { onAuthStateChanged }] = await Promise.all([
            import('../lib/firebase'),
            import('firebase/auth'),
          ]);
          if (!isMounted) return;
          unsubscribe = onAuthStateChanged(
            auth,
            (u) => {
              if (!isMounted) return;
              if (localStorage.getItem('oneroof_custom_user')) return;
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
            },
            (error) => {
              console.error('Auth helper error:', error);
            },
          );
        } catch (e) {
          console.warn('Deferred Firebase auth load failed:', e);
        }
      })();
    }

    return () => {
      isMounted = false;
      if (unsubscribe) unsubscribe();
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
      const [{ auth }, { signOut }] = await Promise.all([
        import('../lib/firebase'),
        import('firebase/auth'),
      ]);
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
