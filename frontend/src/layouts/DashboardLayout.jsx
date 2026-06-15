import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  CalendarCheck,
  Package,
  Users,
  BarChart3,
  TrendingUp,
  Settings,
  Menu,
  X,
  Bell,
  LogOut,
  ChevronRight,
} from 'lucide-react';

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/hotel-management', label: 'Hotel Management', icon: Building2 },
  { path: '/reservation-management', label: 'Reservations', icon: CalendarCheck },
  { path: '/inventory-management', label: 'Inventory', icon: Package },
  { path: '/employee-management', label: 'Employees', icon: Users },
  { path: '/finance', label: 'Finance', icon: TrendingUp },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/settings', label: 'Settings', icon: Settings },
];

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const notifications = [
    { id: 1, title: 'New Booking', desc: 'Room 301 reserved for 2 nights.', time: '5m ago', unread: true },
    { id: 2, title: 'Low Stock Alert', desc: 'Towels in Housekeeping below minimum.', time: '1h ago', unread: true },
    { id: 3, title: 'Staff Update', desc: 'Nadeeka requested leave for 20th Jun.', time: '2h ago', unread: false },
  ];

  const currentPage = navItems.find(item => item.path === location.pathname);

  useEffect(() => {
    // Show splash screen on initial load
    const splash = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(splash);
  }, []);

  return (
    <div className="flex min-h-screen bg-stone-100">

      {/* ─── Splash Screen ─── */}
      <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-emerald-950 transition-all duration-700 ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="relative w-28 h-28 mb-6">
          <div className="absolute -inset-5 border-[3px] border-emerald-900/40 border-t-amber-500 border-r-amber-500 rounded-full animate-spin" />
          <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-2xl animate-pulse" />
          <img src="/logo.png" alt="Siyala" className="relative z-10 w-full h-full object-cover rounded-full border border-amber-500/20 shadow-2xl" />
        </div>
        <h1 className="text-amber-500 font-serif font-bold tracking-[0.3em] uppercase text-3xl">SIYALA</h1>
        <p className="text-emerald-300/50 tracking-widest text-xs uppercase mt-2">Admin Dashboard</p>
      </div>

      {/* ─── Mobile Backdrop ─── */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-emerald-950/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* ─── Sidebar ─── */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-40 flex flex-col
          bg-emerald-950 border-r border-white/10 shadow-2xl
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'w-64' : 'w-20'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className={`flex items-center gap-3 p-5 border-b border-white/10 ${!isSidebarOpen && 'justify-center'}`}>
          <img
            src="/logo.png"
            alt="Siyala Logo"
            className="w-11 h-11 rounded-full border border-amber-500/40 object-cover shrink-0 shadow-lg"
          />
          {isSidebarOpen && (
            <div className="overflow-hidden">
              <p className="text-amber-500 font-serif font-bold text-lg leading-tight tracking-wide">SIYALA</p>
              <p className="text-emerald-300/60 text-xs tracking-widest uppercase">Admin Dashboard</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto no-scrollbar">
          {navItems.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMobileOpen(false)}
                title={!isSidebarOpen ? label : ''}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative
                  ${isActive
                    ? 'bg-amber-500 text-emerald-950 shadow-[0_4px_15px_rgba(245,158,11,0.4)]'
                    : 'text-emerald-100/70 hover:bg-white/10 hover:text-white'
                  }
                  ${!isSidebarOpen ? 'justify-center' : ''}
                `}
              >
                <Icon className={`w-5 h-5 shrink-0 transition-transform ${isActive ? '' : 'group-hover:scale-110'}`} />
                {isSidebarOpen && (
                  <span className="font-semibold text-sm tracking-wide truncate">{label}</span>
                )}
                {isSidebarOpen && isActive && (
                  <ChevronRight className="w-4 h-4 ml-auto shrink-0" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom: Profile & Collapse */}
        <div className="p-3 border-t border-white/10 space-y-2">
          {isSidebarOpen && (
            <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/10">
              <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center text-emerald-950 font-bold text-sm shrink-0">
                A
              </div>
              <div className="overflow-hidden flex-1">
                <p className="text-white font-semibold text-sm truncate">System Admin</p>
                <p className="text-emerald-300/50 text-xs truncate">admin@siyala.lk</p>
              </div>
            </div>
          )}
          <button
            onClick={() => navigate('/login')}
            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-emerald-100/60 hover:text-red-400 hover:bg-red-500/10 transition-all ${!isSidebarOpen ? 'justify-center' : ''}`}
            title="Logout"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {isSidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>

        {/* Top Header */}
        <header className="sticky top-0 z-20 flex items-center justify-between px-4 md:px-8 py-4 bg-white/80 backdrop-blur-xl border-b border-stone-200 shadow-sm">
          <div className="flex items-center gap-4">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-2 rounded-xl text-emerald-950 hover:bg-stone-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Desktop sidebar collapse toggle */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hidden md:flex p-2 rounded-xl text-emerald-900/60 hover:bg-stone-100 hover:text-emerald-950 transition-colors"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div>
              <h1 className="text-lg font-bold text-emerald-950 leading-tight">
                {currentPage?.label ?? 'Dashboard'}
              </h1>
              <p className="text-xs text-stone-400 font-medium tracking-wide">
                Siyala Hotel Management System
              </p>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 relative">
            <button 
              onClick={() => setIsNotifOpen(!isNotifOpen)}
              className="relative p-2.5 rounded-xl bg-stone-100 text-emerald-900 hover:bg-amber-50 hover:text-amber-600 transition-all"
            >
              <Bell className="w-5 h-5" />
              {notifications.some(n => n.unread) && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              )}
            </button>

            {/* Notification Dropdown */}
            {isNotifOpen && (
              <>
                <div className="fixed inset-0 z-20" onClick={() => setIsNotifOpen(false)} />
                <div className="absolute top-full right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-stone-100 z-30 overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <div className="p-4 border-b border-stone-100 flex items-center justify-between bg-stone-50">
                    <h3 className="font-bold text-emerald-950">Notifications</h3>
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                      {notifications.filter(n => n.unread).length} New
                    </span>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map(n => (
                      <div key={n.id} className={`p-4 border-b border-stone-50 hover:bg-stone-50 transition-colors cursor-pointer ${n.unread ? 'bg-amber-50/30' : ''}`}>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={`text-sm ${n.unread ? 'font-bold text-emerald-950' : 'font-semibold text-stone-600'}`}>{n.title}</h4>
                          <span className="text-[10px] font-bold text-stone-400">{n.time}</span>
                        </div>
                        <p className="text-xs text-stone-500">{n.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t border-stone-100 hover:bg-stone-50 transition-colors cursor-pointer">
                    <span className="text-xs font-bold text-emerald-600">Mark all as read</span>
                  </div>
                </div>
              </>
            )}

            <Link to="/profile" className="w-9 h-9 rounded-full bg-emerald-950 flex items-center justify-center text-amber-500 font-bold text-sm shadow hover:scale-105 transition-transform">
              A
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
