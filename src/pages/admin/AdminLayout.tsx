import { Navigate, Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function AdminLayout() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  if (loading) return <div className="p-8 text-center bg-slate-900 text-white min-h-screen flex items-center justify-center">Loading Admin Session...</div>;

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col gap-6 overflow-y-auto">
        <h1 className="text-xl font-bold font-display tracking-tight text-white/90">Oneroof Admin</h1>
        <nav className="flex flex-col gap-1.5">
          <Link to="/admin" className="px-3 py-1.5 rounded hover:bg-slate-800 transition text-sm font-semibold">Dashboard</Link>
          
          <div className="text-xs uppercase font-extrabold text-slate-500 mt-4 px-3 tracking-wider">Pages</div>
          <Link to="/admin/pages/home" className="px-3 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300">Home Page</Link>
          <Link to="/admin/pages/about" className="px-3 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300">About Page</Link>
          <Link to="/admin/pages/contact" className="px-3 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300">Contact Page</Link>
          
          <div className="text-xs uppercase font-extrabold text-slate-500 mt-4 px-3 tracking-wider">Systems & Products</div>
          <Link to="/admin/collections/services/edit/residential-solar-system" className="px-3 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300">Residential Solar Systems</Link>
          <Link to="/admin/collections/services/edit/commercial-solar-system" className="px-3 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300">Commercial Solar Systems</Link>
          <Link to="/admin/collections/services/edit/ev-chargers" className="px-3 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300">EV Chargers</Link>
          <Link to="/admin/collections/services/edit/solar-inverters" className="px-3 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300">Solar Inverters</Link>
          <Link to="/admin/collections/services/edit/solar-panel" className="px-3 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300">Solar Panels</Link>
          <Link to="/admin/collections/services/edit/battery-storage" className="px-3 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300">Battery Storage Solutions</Link>
          
          <div className="text-xs uppercase font-extrabold text-slate-500 mt-4 px-3 tracking-wider">Services</div>
          <Link to="/admin/collections/services/edit/solar-panel-installation" className="px-3 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300">Solar Panel Installation</Link>
          <Link to="/admin/collections/services/edit/solar-inverter-installation" className="px-3 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300">Solar Inverter Installation</Link>
          <Link to="/admin/collections/services/edit/solar-battery-installation" className="px-3 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300">Solar Battery Installation</Link>
          <Link to="/admin/collections/services/edit/repairs-and-maintenance" className="px-3 py-1 text-xs font-medium rounded hover:bg-slate-800 transition text-slate-300">Repairs & Maintenance</Link>

          <div className="border-t border-slate-800 mt-4 pt-4">
            <Link to="/admin/collections/services" className="px-3 py-1 text-xs font-semibold text-slate-400 hover:text-white block">View All Raw Collection Docs</Link>
          </div>
        </nav>
        <div className="mt-auto pt-5 border-t border-slate-800 space-y-4">
          <div className="flex flex-col gap-1.5 bg-slate-950/40 p-3 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Active Session</span>
            <div className="text-xs font-semibold truncate text-brand-400" title={user?.email || ''}>
              {user?.email}
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></span>
              <span className="text-[10px] text-slate-400 font-mono">
                {user?.role || 'Administrator'}
              </span>
            </div>
            {user?.isCustom && (
              <div className="text-[10px] text-amber-500 font-semibold bg-amber-500/10 p-1.5 rounded border border-amber-500/20 mt-1 pb-1 animate-pulse leading-snug">
                ⚠️ Local Offline Fallback
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-2">
            <button
              onClick={async () => {
                await logout();
                navigate('/admin/login');
              }}
              className="w-full text-center px-4 py-2 bg-slate-850 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition cursor-pointer border border-slate-700/60 shadow"
            >
              Sign Out
            </button>
            <Link to="/" className="text-xs text-center text-slate-400 hover:text-white block pt-0.5">
              ← Back to Front End
            </Link>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
