import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useEffect, useState, FormEvent } from 'react';
import { Crown, Lock, Mail, ShieldAlert, LogIn, UserPlus, HelpCircle } from 'lucide-react';

const PRESET_ACCOUNTS = [
  {
    name: "System Administrator",
    email: "admin@oneroofsolar.com.au",
    password: "OneroofAdmin2026!",
    role: "Administrator",
    badge: "Full Access",
    color: "brand"
  },
  {
    name: "Marketing & SEO Editor",
    email: "editor@oneroofsolar.com.au",
    password: "OneroofEditor2026!",
    role: "Editor",
    badge: "Limited Access",
    color: "emerald"
  }
];

export function AdminLogin() {
  const navigate = useNavigate();
  const { user, loginCustomUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [user, navigate]);

  const handleAuth = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const targetEmail = email.trim();

    if (isRegister) {
      // Direct registration with localized credentials
      if (password.length < 6) {
        setError('Password should be at least 6 characters long.');
        setLoading(false);
        return;
      }
      setSuccess('Account created successfully! Redirecting to dashboard...');
      setTimeout(() => {
        loginCustomUser(targetEmail, 'Administrator');
        navigate('/admin');
        setLoading(false);
      }, 1000);
    } else {
      // Login mode
      const preset = PRESET_ACCOUNTS.find(
        (acc) => acc.email.toLowerCase() === targetEmail.toLowerCase()
      );

      if (preset) {
        if (password !== preset.password) {
          setError('Incorrect password for preset account. Please verify credentials.');
          setLoading(false);
          return;
        }
        setSuccess('Signing in to system preset...');
        setTimeout(() => {
          loginCustomUser(preset.email, preset.role);
          navigate('/admin');
          setLoading(false);
        }, 1000);
        return;
      }

      // Standard custom email & password sign-in (any password)
      if (password.length < 6) {
        setError('Invalid credentials. Password must be at least 6 characters.');
        setLoading(false);
        return;
      }

      setSuccess('Custom credentials recognized. Authorizing...');
      setTimeout(() => {
        const assignedRole = targetEmail.toLowerCase() === 'editor@oneroofsolar.com.au' ? 'Editor' : 'Administrator';
        loginCustomUser(targetEmail, assignedRole);
        navigate('/admin');
        setLoading(false);
      }, 1000);
    }
  };

  const selectPreset = (preset: typeof PRESET_ACCOUNTS[0]) => {
    setEmail(preset.email);
    setPassword(preset.password);
    setIsRegister(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4 md:p-8 font-sans selection:bg-brand-500/30 selection:text-brand-300 relative overflow-y-auto">
      
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(140,198,63,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-md w-full bg-slate-800/80 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-6 md:p-8 shadow-2xl relative z-10 my-8">
        
        {/* Header Branding */}
        <div className="flex flex-col items-center gap-2 mb-6 text-center">
          <span className="p-2 bg-brand-500/10 text-brand-400 rounded-xl border border-brand-500/20">
            <Crown className="w-5 h-5 animate-pulse" />
          </span>
          <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Oneroof Admin Panel</span>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 bg-slate-900/65 p-1 rounded-xl mb-6 border border-slate-700/40">
          <button 
            type="button"
            onClick={() => { setIsRegister(false); setError(''); }}
            className={`py-2 px-3 rounded-lg text-xs font-semibold transition flex items-center justify-center gap-2 ${!isRegister ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
          >
            <LogIn className="w-3.5 h-3.5" /> Sign In
          </button>
          <button 
            type="button"
            onClick={() => { setIsRegister(true); setError(''); }}
            className={`py-2 px-3 rounded-lg text-xs font-semibold transition flex items-center justify-center gap-2 ${isRegister ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
          >
            <UserPlus className="w-3.5 h-3.5" /> Register Admin
          </button>
        </div>

        <div className="w-full">
          <h1 className="text-2xl font-display font-semibold mb-1 text-white text-center">
            {isRegister ? 'Create Account' : 'Sign In'}
          </h1>
          <p className="text-slate-400 text-sm mb-6 text-center">
            {isRegister 
              ? 'Register custom developer or administrator credentials.'
              : 'Enter customized administrator credentials to login.'}
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 text-red-300 text-xs rounded-xl border border-red-500/20 flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div className="whitespace-pre-line">
                <span className="font-semibold block mb-1">Authentication Error</span>
                {error}
              </div>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-emerald-500/10 text-emerald-300 text-xs rounded-xl border border-emerald-500/20 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1 shrink-0" />
              <span>{success}</span>
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 text-sm focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition"
                  placeholder="name@oneroofsolar.com.au"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1.5 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" /> Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 text-sm focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-medium tracking-wide transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-semibold shadow-lg shadow-brand-950/20 mt-6 cursor-pointer"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  {isRegister ? 'Register Account' : 'Secure Login'}
                  {isRegister ? <UserPlus className="w-4 h-4 ml-0.5" /> : <LogIn className="w-4 h-4 ml-0.5" />}
                </>
              )}
            </button>
          </form>

          {/* Preset / Default Sign-In Helpers */}
          {!isRegister && (
            <div className="mt-8 border-t border-slate-700/40 pt-6">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 block mb-3 text-center">
                System Presets (Click to autofill & login)
              </span>
              <div className="space-y-2">
                {PRESET_ACCOUNTS.map((preset) => (
                  <button
                    key={preset.email}
                    type="button"
                    onClick={() => selectPreset(preset)}
                    className="w-full text-left bg-slate-900/40 hover:bg-slate-900/80 border border-slate-700/40 hover:border-slate-600/60 rounded-xl p-3 transition flex justify-between items-center group cursor-pointer text-xs"
                  >
                    <div>
                      <div className="font-semibold text-slate-200 group-hover:text-white">{preset.name}</div>
                      <div className="text-slate-400 group-hover:text-slate-300 text-[11px]">{preset.email}</div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] bg-brand-500/10 text-brand-400 rounded-md border border-brand-500/15 font-semibold shrink-0">
                      Preset
                    </span>
                  </button>
                ))}
                
                {/* Specific option for developer testing */}
                <button
                  type="button"
                  onClick={() => {
                    setEmail('shakeebahmed054@gmail.com');
                    setPassword('OneroofAdmin2026!');
                    setIsRegister(false);
                  }}
                  className="w-full text-left bg-slate-900/40 hover:bg-slate-900/80 border border-slate-700/40 hover:border-slate-600/60 rounded-xl p-3 transition flex justify-between items-center group cursor-pointer text-xs"
                >
                  <div>
                    <div className="font-semibold text-slate-200 group-hover:text-white">Developer Testing</div>
                    <div className="text-slate-400 group-hover:text-slate-300 text-[11px]">shakeebahmed054@gmail.com</div>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/15 font-semibold shrink-0">
                    Developer
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
