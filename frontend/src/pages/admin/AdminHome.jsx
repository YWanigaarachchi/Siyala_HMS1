import React, { useState } from 'react';
import { 
  DollarSign, 
  Users, 
  CalendarCheck, 
  UserCheck,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  X
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 },
];

const occupancyData = [
  { name: 'Mon', rate: 70 },
  { name: 'Tue', rate: 65 },
  { name: 'Wed', rate: 80 },
  { name: 'Thu', rate: 85 },
  { name: 'Fri', rate: 95 },
  { name: 'Sat', rate: 100 },
  { name: 'Sun', rate: 90 },
];

const recentBookings = [
  { id: '#RES-1021', branch: 'Siyala Kandy', guest: 'Kamal Perera', room: 'Deluxe Suite', amount: 'LKR 45,000', status: 'Confirmed' },
  { id: '#RES-1022', branch: 'Siyala Hikkaduwa', guest: 'Sarah Jenkins', room: 'Ocean View', amount: 'LKR 38,000', status: 'Pending' },
  { id: '#RES-1023', branch: 'Siyala Kandy', guest: 'Nimal Silva', room: 'Standard', amount: 'LKR 15,000', status: 'Confirmed' },
  { id: '#RES-1024', branch: 'Siyala Colombo', guest: 'Emma Watson', room: 'Presidential', amount: 'LKR 120,000', status: 'Cancelled' },
];

const AdminHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl font-bold text-emerald-950">System Overview</h2>
          <p className="text-sm text-stone-500 mt-1">System-wide overview for all Siyala properties.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => openModal('Manager')} className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-3 py-2 rounded-xl font-semibold shadow-sm transition-colors text-sm flex items-center gap-1">
            <Plus className="w-4 h-4" /> Manager
          </button>
          <button onClick={() => openModal('Admin')} className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-2 rounded-xl font-semibold shadow-sm transition-colors text-sm flex items-center gap-1">
            <Plus className="w-4 h-4" /> Admin
          </button>
          <button onClick={() => openModal('Customer')} className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-3 py-2 rounded-xl font-semibold shadow-sm transition-colors text-sm flex items-center gap-1">
            <Plus className="w-4 h-4" /> Customer
          </button>
          <button className="bg-stone-800 hover:bg-stone-900 text-white px-4 py-2 rounded-xl font-semibold shadow-sm transition-colors text-sm sm:ml-2">
            Download Report
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              12.5%
            </span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Total Revenue</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">LKR 2.4M</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              1 New
            </span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Total Properties</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">4 Active</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">
              <ArrowDownRight className="w-3 h-3 mr-1" />
              3.1%
            </span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Occupancy Rate</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">85%</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              1.2%
            </span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Staff on Duty</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">48</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
          <h3 className="text-lg font-bold text-emerald-950 mb-6">Revenue Trend</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#022c22', fontWeight: 'bold' }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6, stroke: '#064e3b', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Occupancy Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
          <h3 className="text-lg font-bold text-emerald-950 mb-6">Global Occupancy</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{ fill: '#f5f5f4' }}
                />
                <Bar dataKey="rate" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-6 border-b border-stone-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-emerald-950">Recent Bookings</h3>
          <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Booking ID</th>
                <th className="p-4 font-medium">Branch</th>
                <th className="p-4 font-medium">Guest Name</th>
                <th className="p-4 font-medium">Room Type</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {recentBookings.map((booking, idx) => (
                <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-4 text-sm font-semibold text-emerald-950">{booking.id}</td>
                  <td className="p-4 text-sm font-medium text-amber-600">{booking.branch}</td>
                  <td className="p-4 text-sm text-stone-600">{booking.guest}</td>
                  <td className="p-4 text-sm text-stone-600">{booking.room}</td>
                  <td className="p-4 text-sm font-medium text-emerald-950">{booking.amount}</td>
                  <td className="p-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      booking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' :
                      booking.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-stone-100">
                <h3 className="text-lg font-bold text-emerald-950">Add New {modalType}</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-xl hover:bg-stone-100 transition-colors">
                  <X className="w-5 h-5 text-stone-500" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Full Name</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder={`Enter ${modalType.toLowerCase()} name`} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Email Address</label>
                  <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="name@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Phone Number</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="+94 7X XXX XXXX" />
                </div>
                {(modalType === 'Manager' || modalType === 'Admin') && (
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Assign Branch</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                      <option>All Branches (System Wide)</option>
                      <option>Siyala Kandy</option>
                      <option>Siyala Hikkaduwa</option>
                      <option>Siyala Colombo</option>
                      <option>Siyala Ella</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-3 p-6 border-t border-stone-100">
                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-stone-200 text-sm font-semibold text-stone-600 hover:bg-stone-50 transition-colors">Cancel</button>
                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-emerald-950 text-sm font-semibold shadow-sm transition-colors">Add {modalType}</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminHome;

