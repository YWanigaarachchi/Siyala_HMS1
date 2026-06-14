import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Star, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

const LOCATIONS = ['All Properties', 'Kandy Heritage', 'Hikkaduwa Beach'];

const guestOrigins = [
  { country: 'United Kingdom', flag: 'https://flagcdn.com/w40/gb.png', pct: 24, guests: 312 },
  { country: 'Germany', flag: 'https://flagcdn.com/w40/de.png', pct: 18, guests: 234 },
  { country: 'Australia', flag: 'https://flagcdn.com/w40/au.png', pct: 14, guests: 182 },
  { country: 'India', flag: 'https://flagcdn.com/w40/in.png', pct: 12, guests: 156 },
  { country: 'France', flag: 'https://flagcdn.com/w40/fr.png', pct: 10, guests: 130 },
  { country: 'United States', flag: 'https://flagcdn.com/w40/us.png', pct: 9, guests: 117 },
  { country: 'Japan', flag: 'https://flagcdn.com/w40/jp.png', pct: 7, guests: 91 },
  { country: 'Others', flag: null, pct: 6, guests: 78 },
];

const monthlyOccupancy = [
  { month: 'Jan', kandy: 72, hikka: 68 },
  { month: 'Feb', kandy: 78, hikka: 75 },
  { month: 'Mar', kandy: 85, hikka: 82 },
  { month: 'Apr', kandy: 91, hikka: 88 },
  { month: 'May', kandy: 88, hikka: 93 },
  { month: 'Jun', kandy: 80, hikka: 91 },
];

const topRooms = [
  { room: 'Heritage Loft 202', bookings: 28, revenue: 'LKR 1.26M', rating: 4.9 },
  { room: 'Beach Cabana 05', bookings: 24, revenue: 'LKR 528K', rating: 4.8 },
  { room: 'Royal Villa', bookings: 16, revenue: 'LKR 1.36M', rating: 5.0 },
  { room: 'Penthouse', bookings: 14, revenue: 'LKR 910K', rating: 4.7 },
  { room: 'Ocean View Suite 112', bookings: 22, revenue: 'LKR 770K', rating: 4.6 },
];

const Analytics = () => {
  const [location, setLocation] = useState('All Properties');
  const [period, setPeriod] = useState('H1 2026');

  const kpis = [
    { label: 'Avg. Occupancy Rate', value: '83.2%', change: '+6.4%', positive: true, icon: BarChart3 },
    { label: 'Guest Satisfaction Score', value: '4.85 / 5', change: '+0.12', positive: true, icon: Star },
    { label: 'Avg. Length of Stay', value: '3.8 nights', change: '+0.4', positive: true, icon: Calendar },
    { label: 'Total Guests (H1)', value: '1,300', change: '+11%', positive: true, icon: Users },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-emerald-950">Analytics</h1>
          <p className="text-stone-400 text-sm mt-1">Business intelligence and performance insights.</p>
        </div>
        <div className="flex gap-2">
          {LOCATIONS.map(l => (
            <button
              key={l}
              onClick={() => setLocation(l)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${location === l ? 'bg-emerald-950 text-amber-400 border-emerald-950' : 'bg-white text-stone-500 border-stone-200 hover:border-amber-400'}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map(k => (
          <div key={k.label} className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="p-2.5 bg-amber-50 rounded-xl">
                <k.icon className="w-5 h-5 text-amber-600" />
              </div>
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
                <ArrowUpRight className="w-3 h-3" />{k.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-emerald-950 mb-1">{k.value}</p>
            <p className="text-xs text-stone-400 font-medium">{k.label}</p>
          </div>
        ))}
      </div>

      {/* Occupancy Trend */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-emerald-950">Monthly Occupancy Rate (%)</h2>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-500" /> Kandy</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-amber-500" /> Hikkaduwa</span>
          </div>
        </div>
        <div className="flex items-end gap-3">
          {monthlyOccupancy.map(m => (
            <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
              <div className="flex items-end gap-1 h-36 w-full">
                <div
                  className="flex-1 bg-emerald-500 rounded-t-lg hover:bg-emerald-400 transition-colors cursor-pointer relative group"
                  style={{ height: `${m.kandy}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-950 text-white text-[10px] font-bold px-2 py-1 rounded hidden group-hover:block whitespace-nowrap z-10">
                    {m.kandy}%
                  </div>
                </div>
                <div
                  className="flex-1 bg-amber-500 rounded-t-lg hover:bg-amber-400 transition-colors cursor-pointer relative group"
                  style={{ height: `${m.hikka}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-950 text-white text-[10px] font-bold px-2 py-1 rounded hidden group-hover:block whitespace-nowrap z-10">
                    {m.hikka}%
                  </div>
                </div>
              </div>
              <span className="text-xs text-stone-400 font-medium">{m.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Origins + Top Rooms */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Guest Origins */}
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
          <h2 className="font-bold text-emerald-950 mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-500" /> Guest Origins
          </h2>
          <p className="text-xs text-stone-400 mb-5">Top source countries by guest count (H1 2026)</p>
          <div className="space-y-3">
            {guestOrigins.map(g => (
              <div key={g.country} className="flex items-center gap-3">
                {g.flag
                  ? <img src={g.flag} alt={g.country} className="w-7 h-auto rounded-sm shadow-sm shrink-0" />
                  : <div className="w-7 h-4 bg-stone-100 rounded-sm shrink-0 flex items-center justify-center text-[8px] text-stone-400 font-bold">…</div>
                }
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-emerald-950">{g.country}</span>
                    <span className="text-stone-400">{g.guests} guests</span>
                  </div>
                  <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${g.pct}%` }} />
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 w-8 text-right">{g.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Rooms */}
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-stone-100">
            <TrendingUp className="w-4 h-4 text-amber-500" />
            <h2 className="font-bold text-emerald-950">Top Performing Rooms</h2>
          </div>
          <div className="divide-y divide-stone-50">
            {topRooms.map((room, i) => (
              <div key={room.room} className="flex items-center justify-between px-6 py-4 hover:bg-stone-50 transition-colors">
                <div className="flex items-center gap-4">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${i === 0 ? 'bg-amber-500 text-emerald-950' : i === 1 ? 'bg-stone-200 text-stone-600' : i === 2 ? 'bg-amber-700/30 text-amber-900' : 'bg-stone-100 text-stone-500'}`}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-emerald-950 text-sm">{room.room}</p>
                    <p className="text-xs text-stone-400">{room.bookings} bookings · {room.revenue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span className="text-sm font-bold text-emerald-950">{room.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
