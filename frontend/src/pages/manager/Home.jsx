import React, { useState, useEffect } from 'react';
import {
  Clock, Building2, CalendarCheck, Package, Users,
  TrendingUp, ArrowUpRight, ArrowDownRight, BedDouble,
  CheckCircle2, AlertCircle, XCircle, BarChart2,
} from 'lucide-react';

/* ── Mini Components ── */
const StatCard = ({ label, value, change, positive, icon: Icon, color }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${positive ? 'text-emerald-700 bg-emerald-50' : 'text-red-600 bg-red-50'}`}>
        {positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
        {change}
      </span>
    </div>
    <p className="text-3xl font-bold text-emerald-950 mb-1">{value}</p>
    <p className="text-sm text-stone-400 font-medium">{label}</p>
  </div>
);

const RoomStatusBadge = ({ status }) => {
  const map = {
    Available: { icon: CheckCircle2, cls: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    Occupied: { icon: XCircle, cls: 'text-red-600 bg-red-50 border-red-200' },
    Maintenance: { icon: AlertCircle, cls: 'text-amber-600 bg-amber-50 border-amber-200' },
  };
  const { icon: Icon, cls } = map[status] || map['Available'];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${cls}`}>
      <Icon className="w-3 h-3" /> {status}
    </span>
  );
};

/* ── Main Page ── */
const ManagerHome = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Total Bookings Today', value: '47', change: '+12%', positive: true, icon: CalendarCheck, color: 'bg-emerald-600' },
    { label: 'Active Guests', value: '183', change: '+5%', positive: true, icon: Users, color: 'bg-amber-500' },
    { label: 'Revenue (Today)', value: 'LKR 2.4M', change: '+18%', positive: true, icon: TrendingUp, color: 'bg-blue-500' },
    { label: 'Available Rooms', value: '32', change: '-3', positive: false, icon: BedDouble, color: 'bg-purple-500' },
  ];

  const recentBookings = [
    { id: '#BK-1042', guest: 'Amara Perera', room: 'Deluxe Suite 301', location: 'Kandy', checkin: '2026-06-14', checkout: '2026-06-17', status: 'Confirmed' },
    { id: '#BK-1041', guest: 'James Wilson', room: 'Ocean View 112', location: 'Hikkaduwa', checkin: '2026-06-14', checkout: '2026-06-16', status: 'Pending' },
    { id: '#BK-1040', guest: 'Priya Kumar', room: 'Heritage Loft 202', location: 'Kandy', checkin: '2026-06-13', checkout: '2026-06-18', status: 'Confirmed' },
    { id: '#BK-1039', guest: 'Lena Schmidt', room: 'Beach Cabana 05', location: 'Hikkaduwa', checkin: '2026-06-13', checkout: '2026-06-15', status: 'Checked-In' },
    { id: '#BK-1038', guest: 'Rohan Bandara', room: 'Standard 401', location: 'Kandy', checkin: '2026-06-12', checkout: '2026-06-14', status: 'Checked-Out' },
  ];

  const roomStatusData = [
    { location: 'Kandy Heritage', rooms: [
      { number: '101', type: 'Standard', status: 'Occupied' },
      { number: '102', type: 'Standard', status: 'Available' },
      { number: '201', type: 'Deluxe', status: 'Maintenance' },
      { number: '301', type: 'Suite', status: 'Occupied' },
    ]},
    { location: 'Hikkaduwa Beach', rooms: [
      { number: '01', type: 'Cabana', status: 'Occupied' },
      { number: '05', type: 'Cabana', status: 'Occupied' },
      { number: '112', type: 'Ocean View', status: 'Available' },
      { number: '210', type: 'Penthouse', status: 'Available' },
    ]},
  ];

  const modules = [
    { label: 'Hotel Management', icon: Building2, path: '/hotel-management', color: 'bg-emerald-600' },
    { label: 'Reservations', icon: CalendarCheck, path: '/reservation-management', color: 'bg-amber-500' },
    { label: 'Inventory', icon: Package, path: '/inventory-management', color: 'bg-blue-500' },
    { label: 'Employees', icon: Users, path: '/employee-management', color: 'bg-purple-500' },
  ];

  const bookingStatusColor = {
    Confirmed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Pending: 'bg-amber-50 text-amber-700 border-amber-200',
    'Checked-In': 'bg-blue-50 text-blue-700 border-blue-200',
    'Checked-Out': 'bg-stone-100 text-stone-500 border-stone-200',
  };

  return (
    <div className="space-y-8">



      {/* ─── Hero Banner with Clock ─── */}
      <div className="relative rounded-3xl overflow-hidden bg-emerald-950 shadow-xl min-h-[200px] flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/kandy_hotel.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent" />
        
        <div className="relative z-10">
          <p className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-2">Welcome Back</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">Good {currentTime.getHours() < 12 ? 'Morning' : currentTime.getHours() < 17 ? 'Afternoon' : 'Evening'}, Manager</h2>
          <p className="text-emerald-100/60 text-sm mt-1">Here's what's happening across your properties today.</p>
        </div>

        <div className="relative z-10 text-right shrink-0">
          <p className="text-emerald-300/60 text-xs tracking-widest uppercase mb-2 font-semibold">Sri Lanka Time</p>
          <div className="text-5xl md:text-6xl font-bold tracking-widest text-white drop-shadow-lg">
            {currentTime.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' })}
          </div>
          <p className="text-emerald-100/50 text-sm mt-2 tracking-wide">
            {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* ─── Stats Grid ─── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      {/* ─── Quick Access Modules ─── */}
      <div>
        <h2 className="text-lg font-bold text-emerald-950 mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {modules.map(({ label, icon: Icon, path, color }) => (
            <a
              key={path}
              href={path}
              className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className={`p-4 rounded-2xl ${color} shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-semibold text-emerald-950 text-center">{label}</p>
            </a>
          ))}
        </div>
      </div>

      {/* ─── Bottom Grid: Bookings + Room Status ─── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Recent Bookings */}
        <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
            <h2 className="text-base font-bold text-emerald-950 flex items-center gap-2">
              <CalendarCheck className="w-4 h-4 text-amber-500" /> Recent Bookings
            </h2>
            <a href="/reservation-management" className="text-xs font-bold text-amber-600 hover:text-amber-700 tracking-wide uppercase">View All →</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-stone-50 border-b border-stone-100">
                <tr>
                  {['Booking ID', 'Guest', 'Room', 'Location', 'Check-in', 'Status'].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-bold text-stone-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {recentBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-stone-50 transition-colors">
                    <td className="px-6 py-4 font-mono font-bold text-emerald-700 text-xs">{b.id}</td>
                    <td className="px-6 py-4 font-semibold text-emerald-950">{b.guest}</td>
                    <td className="px-6 py-4 text-stone-500">{b.room}</td>
                    <td className="px-6 py-4 text-stone-500">{b.location}</td>
                    <td className="px-6 py-4 text-stone-500">{b.checkin}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${bookingStatusColor[b.status]}`}>
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Room Status Overview */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-stone-100">
            <BedDouble className="w-4 h-4 text-amber-500" />
            <h2 className="text-base font-bold text-emerald-950">Room Status</h2>
          </div>
          <div className="p-4 space-y-4 max-h-[380px] overflow-y-auto no-scrollbar">
            {roomStatusData.map((loc) => (
              <div key={loc.location}>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2 px-1">{loc.location}</p>
                <div className="space-y-2">
                  {loc.rooms.map((room) => (
                    <div key={room.number} className="flex items-center justify-between px-4 py-3 rounded-xl bg-stone-50 border border-stone-100">
                      <div>
                        <p className="font-bold text-emerald-950 text-sm">Room {room.number}</p>
                        <p className="text-xs text-stone-400">{room.type}</p>
                      </div>
                      <RoomStatusBadge status={room.status} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Location Revenue Bar ─── */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6">
        <div className="flex items-center gap-2 mb-6">
          <BarChart2 className="w-4 h-4 text-amber-500" />
          <h2 className="text-base font-bold text-emerald-950">Revenue by Location (This Month)</h2>
        </div>
        <div className="space-y-4">
          {[
            { location: 'Kandy Heritage', revenue: 4200000, max: 6000000, color: 'bg-emerald-600' },
            { location: 'Hikkaduwa Beach', revenue: 3800000, max: 6000000, color: 'bg-amber-500' },
          ].map((loc) => (
            <div key={loc.location}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-emerald-950">{loc.location}</span>
                <span className="text-sm font-bold text-stone-500">LKR {(loc.revenue / 1000000).toFixed(1)}M</span>
              </div>
              <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${loc.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${(loc.revenue / loc.max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ManagerHome;
