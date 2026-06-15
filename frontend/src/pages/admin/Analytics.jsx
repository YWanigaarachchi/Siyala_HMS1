import React from 'react';
import {
  Clock,
  UserCheck,
  DollarSign,
  Repeat,
  ArrowUpRight,
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
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const occupancyTrend = [
  { month: 'Jul', rate: 72 },
  { month: 'Aug', rate: 78 },
  { month: 'Sep', rate: 65 },
  { month: 'Oct', rate: 70 },
  { month: 'Nov', rate: 82 },
  { month: 'Dec', rate: 95 },
  { month: 'Jan', rate: 88 },
  { month: 'Feb', rate: 76 },
  { month: 'Mar', rate: 80 },
  { month: 'Apr', rate: 85 },
  { month: 'May', rate: 90 },
  { month: 'Jun', rate: 87 },
];

const guestDemographics = [
  { name: 'Sri Lankan', value: 35 },
  { name: 'British', value: 18 },
  { name: 'German', value: 14 },
  { name: 'Australian', value: 12 },
  { name: 'Indian', value: 10 },
  { name: 'Other', value: 11 },
];

const COLORS = ['#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#ef4444', '#6b7280'];

const revenueByRoom = [
  { type: 'Standard', revenue: 4200000 },
  { type: 'Deluxe', revenue: 7800000 },
  { type: 'Suite', revenue: 6500000 },
  { type: 'Presidential', revenue: 3200000 },
  { type: 'Villa', revenue: 5100000 },
];

const bookingSource = [
  { source: 'Direct', bookings: 320 },
  { source: 'Booking.com', bookings: 280 },
  { source: 'Agoda', bookings: 190 },
  { source: 'Walk-in', bookings: 85 },
  { source: 'Travel Agent', bookings: 125 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-emerald-950">Analytics</h2>
        <p className="text-sm text-stone-500 mt-1">In-depth analytics and performance insights.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><Clock className="w-5 h-5" /></div>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"><ArrowUpRight className="w-3 h-3 mr-1" />0.3</span>
          </div>
          <h3 className="text-stone-500 text-xs font-medium">Avg. Stay Duration</h3>
          <p className="text-xl font-bold text-emerald-950 mt-1">2.8 Nights</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center"><Repeat className="w-5 h-5" /></div>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"><ArrowUpRight className="w-3 h-3 mr-1" />4.2%</span>
          </div>
          <h3 className="text-stone-500 text-xs font-medium">Repeat Guest Rate</h3>
          <p className="text-xl font-bold text-emerald-950 mt-1">24%</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><DollarSign className="w-5 h-5" /></div>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"><ArrowUpRight className="w-3 h-3 mr-1" />8.1%</span>
          </div>
          <h3 className="text-stone-500 text-xs font-medium">Avg. Revenue/Room</h3>
          <p className="text-xl font-bold text-emerald-950 mt-1">LKR 32K</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center"><UserCheck className="w-5 h-5" /></div>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"><ArrowUpRight className="w-3 h-3 mr-1" />2.5%</span>
          </div>
          <h3 className="text-stone-500 text-xs font-medium">Guest Satisfaction</h3>
          <p className="text-xl font-bold text-emerald-950 mt-1">4.7 / 5.0</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Occupancy Trends */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
          <h3 className="text-lg font-bold text-emerald-950 mb-6">Occupancy Trends (12 Months)</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={occupancyTrend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dx={-10} domain={[50, 100]} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} formatter={(v) => `${v}%`} />
                <Line type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6, stroke: '#064e3b', strokeWidth: 2 }} name="Occupancy %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Guest Demographics */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
          <h3 className="text-lg font-bold text-emerald-950 mb-6">Guest Demographics</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={guestDemographics} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                  {guestDemographics.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue by Room Type */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
          <h3 className="text-lg font-bold text-emerald-950 mb-6">Revenue by Room Type</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueByRoom}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                <XAxis dataKey="type" axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dx={-10} tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} formatter={(v) => `LKR ${v.toLocaleString()}`} />
                <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} name="Revenue" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Booking Sources */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
          <h3 className="text-lg font-bold text-emerald-950 mb-6">Booking Sources</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bookingSource} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f5f5f4" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} />
                <YAxis type="category" dataKey="source" axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} width={90} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="bookings" fill="#f59e0b" radius={[0, 4, 4, 0]} name="Bookings" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
