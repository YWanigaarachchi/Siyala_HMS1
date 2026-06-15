import React from 'react';
import {
  CalendarCheck,
  BedDouble,
  Star,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  Clock,
  ChevronRight,
} from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const spendingData = [
  { month: 'Jan', amount: 12000 },
  { month: 'Feb', amount: 0 },
  { month: 'Mar', amount: 35000 },
  { month: 'Apr', amount: 22000 },
  { month: 'May', amount: 45000 },
  { month: 'Jun', amount: 18000 },
];

const staysPerMonth = [
  { month: 'Jan', stays: 1 },
  { month: 'Feb', stays: 0 },
  { month: 'Mar', stays: 2 },
  { month: 'Apr', stays: 1 },
  { month: 'May', stays: 3 },
  { month: 'Jun', stays: 1 },
];

const upcomingBookings = [
  { id: 'BK-2401', hotel: 'Siyala Kandy', room: 'Deluxe Suite', checkIn: 'Jun 20, 2026', checkOut: 'Jun 23, 2026', status: 'Confirmed', amount: 'LKR 45,000' },
  { id: 'BK-2402', hotel: 'Siyala Galle Fort', room: 'Ocean View', checkIn: 'Jul 05, 2026', checkOut: 'Jul 08, 2026', status: 'Pending', amount: 'LKR 62,000' },
];

const recentActivity = [
  { action: 'Booking confirmed', detail: 'Siyala Kandy — Deluxe Suite', time: '2 hours ago' },
  { action: 'Payment processed', detail: 'LKR 45,000 via Visa ****4521', time: '2 hours ago' },
  { action: 'Review submitted', detail: 'Siyala Ella — 5 stars', time: '3 days ago' },
  { action: 'Profile updated', detail: 'Phone number changed', time: '1 week ago' },
];

const CustomerDashHome = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
        <div className="relative z-10">
          <p className="text-emerald-300/60 text-sm font-medium tracking-wide mb-1">Welcome back,</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Guest User 👋</h2>
          <p className="text-emerald-200/50 text-sm max-w-md">
            You have <span className="text-amber-400 font-semibold">2 upcoming bookings</span>. Your loyalty status is <span className="text-amber-400 font-semibold">Gold Member</span>.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/book-room" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg transition-all hover:scale-105">
              <BedDouble className="w-4 h-4" />
              Book a Room
            </a>
            <a href="/my-bookings" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl font-semibold text-sm border border-white/10 transition-all">
              <CalendarCheck className="w-4 h-4" />
              View Bookings
            </a>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              2 Active
            </span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Upcoming Stays</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">2</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <BedDouble className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
              This Year
            </span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Total Stays</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">8</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Star className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
              Gold
            </span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Loyalty Points</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">2,450</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">
              <ArrowDownRight className="w-3 h-3 mr-1" />
              12%
            </span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Total Spent</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">LKR 132K</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
          <h3 className="text-lg font-bold text-emerald-950 mb-6">Spending Trend</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spendingData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#022c22', fontWeight: 'bold' }}
                  formatter={(value) => [`LKR ${value.toLocaleString()}`, 'Spent']}
                />
                <Line type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6, stroke: '#064e3b', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
          <h3 className="text-lg font-bold text-emerald-950 mb-6">Stays per Month</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={staysPerMonth}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dx={-10} allowDecimals={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{ fill: '#f5f5f4' }}
                />
                <Bar dataKey="stays" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Upcoming Bookings Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-6 border-b border-stone-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-emerald-950">Upcoming Bookings</h3>
          <a href="/my-bookings" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Booking ID</th>
                <th className="p-4 font-medium">Hotel</th>
                <th className="p-4 font-medium">Room</th>
                <th className="p-4 font-medium">Check-in</th>
                <th className="p-4 font-medium">Check-out</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {upcomingBookings.map((booking, idx) => (
                <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-4 text-sm font-semibold text-emerald-950">{booking.id}</td>
                  <td className="p-4 text-sm font-medium text-amber-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {booking.hotel}
                  </td>
                  <td className="p-4 text-sm text-stone-600">{booking.room}</td>
                  <td className="p-4 text-sm text-stone-600">{booking.checkIn}</td>
                  <td className="p-4 text-sm text-stone-600">{booking.checkOut}</td>
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

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-6 border-b border-stone-100">
          <h3 className="text-lg font-bold text-emerald-950">Recent Activity</h3>
        </div>
        <div className="divide-y divide-stone-50">
          {recentActivity.map((item, idx) => (
            <div key={idx} className="px-6 py-4 flex items-center justify-between hover:bg-stone-50/50 transition-colors">
              <div>
                <p className="text-sm font-semibold text-emerald-950">{item.action}</p>
                <p className="text-xs text-stone-500 mt-0.5">{item.detail}</p>
              </div>
              <span className="flex items-center gap-1 text-xs text-stone-400 font-medium shrink-0">
                <Clock className="w-3 h-3" />
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashHome;
