import React, { useState } from 'react';
import {
  Search, Filter, CalendarCheck, MapPin, Clock, Eye, XCircle, ChevronDown, BedDouble, ArrowUpRight,
} from 'lucide-react';

const allBookings = [
  { id: 'BK-2401', hotel: 'Siyala Kandy', room: 'Deluxe Suite', checkIn: 'Jun 20, 2026', checkOut: 'Jun 23, 2026', nights: 3, status: 'Confirmed', amount: 'LKR 45,000' },
  { id: 'BK-2402', hotel: 'Siyala Galle Fort', room: 'Ocean View', checkIn: 'Jul 05, 2026', checkOut: 'Jul 08, 2026', nights: 3, status: 'Pending', amount: 'LKR 62,000' },
  { id: 'BK-2318', hotel: 'Siyala Ella', room: 'Mountain View', checkIn: 'May 10, 2026', checkOut: 'May 13, 2026', nights: 3, status: 'Completed', amount: 'LKR 38,000' },
  { id: 'BK-2315', hotel: 'Siyala Kandy', room: 'Standard Room', checkIn: 'Apr 02, 2026', checkOut: 'Apr 04, 2026', nights: 2, status: 'Completed', amount: 'LKR 22,000' },
  { id: 'BK-2290', hotel: 'Siyala Hikkaduwa', room: 'Beach Villa', checkIn: 'Mar 15, 2026', checkOut: 'Mar 18, 2026', nights: 3, status: 'Completed', amount: 'LKR 55,000' },
  { id: 'BK-2275', hotel: 'Siyala Sigiriya', room: 'Heritage Suite', checkIn: 'Feb 20, 2026', checkOut: 'Feb 22, 2026', nights: 2, status: 'Cancelled', amount: 'LKR 42,000' },
  { id: 'BK-2260', hotel: 'Siyala Yala', room: 'Safari Lodge', checkIn: 'Jan 05, 2026', checkOut: 'Jan 08, 2026', nights: 3, status: 'Completed', amount: 'LKR 48,000' },
];

const statusColors = {
  Confirmed: 'bg-emerald-100 text-emerald-700',
  Pending: 'bg-amber-100 text-amber-700',
  Completed: 'bg-blue-100 text-blue-700',
  Cancelled: 'bg-red-100 text-red-700',
};

const MyBookings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredBookings = allBookings.filter(b => {
    const matchSearch = b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        b.hotel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        b.room.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === 'All' || b.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Bookings', value: allBookings.length, color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Upcoming', value: allBookings.filter(b => b.status === 'Confirmed' || b.status === 'Pending').length, color: 'bg-amber-50 text-amber-600' },
          { label: 'Completed', value: allBookings.filter(b => b.status === 'Completed').length, color: 'bg-blue-50 text-blue-600' },
          { label: 'Cancelled', value: allBookings.filter(b => b.status === 'Cancelled').length, color: 'bg-red-50 text-red-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
            <div className={`w-8 h-8 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
              <CalendarCheck className="w-4 h-4" />
            </div>
            <p className="text-xs text-stone-500 font-medium">{stat.label}</p>
            <p className="text-xl font-bold text-emerald-950 mt-0.5">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search by Booking ID, Hotel, or Room..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-10 pr-8 py-2.5 rounded-xl border border-stone-200 text-sm font-medium text-emerald-950 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all appearance-none cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Booking ID</th>
                <th className="p-4 font-medium">Hotel</th>
                <th className="p-4 font-medium">Room</th>
                <th className="p-4 font-medium">Check-in</th>
                <th className="p-4 font-medium">Check-out</th>
                <th className="p-4 font-medium">Nights</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredBookings.map((booking, idx) => (
                <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-4 text-sm font-semibold text-emerald-950">{booking.id}</td>
                  <td className="p-4 text-sm font-medium text-amber-600">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{booking.hotel}</span>
                  </td>
                  <td className="p-4 text-sm text-stone-600 flex items-center gap-1.5">
                    <BedDouble className="w-3.5 h-3.5 text-stone-400" />{booking.room}
                  </td>
                  <td className="p-4 text-sm text-stone-600">{booking.checkIn}</td>
                  <td className="p-4 text-sm text-stone-600">{booking.checkOut}</td>
                  <td className="p-4 text-sm text-stone-600 text-center">{booking.nights}</td>
                  <td className="p-4 text-sm font-medium text-emerald-950">{booking.amount}</td>
                  <td className="p-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[booking.status]}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      {(booking.status === 'Confirmed' || booking.status === 'Pending') && (
                        <button
                          className="p-1.5 rounded-lg text-stone-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Cancel Booking"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredBookings.length === 0 && (
          <div className="p-12 text-center">
            <CalendarCheck className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <p className="text-stone-500 font-medium">No bookings found</p>
            <p className="text-stone-400 text-sm mt-1">Try adjusting your search or filter</p>
          </div>
        )}
      </div>

      {/* Booking Detail Modal */}
      {selectedBooking && (
        <>
          <div className="fixed inset-0 z-40 bg-emerald-950/50 backdrop-blur-sm" onClick={() => setSelectedBooking(null)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-emerald-900 to-emerald-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-300/60 text-xs font-medium tracking-wide">Booking Details</p>
                    <h3 className="text-white font-bold text-xl mt-1">{selectedBooking.id}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[selectedBooking.status]}`}>
                    {selectedBooking.status}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { label: 'Hotel', value: selectedBooking.hotel, icon: MapPin },
                  { label: 'Room Type', value: selectedBooking.room, icon: BedDouble },
                  { label: 'Check-in', value: selectedBooking.checkIn, icon: CalendarCheck },
                  { label: 'Check-out', value: selectedBooking.checkOut, icon: Clock },
                  { label: 'Duration', value: `${selectedBooking.nights} Nights`, icon: Clock },
                  { label: 'Total Amount', value: selectedBooking.amount, icon: ArrowUpRight },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-stone-50 last:border-0">
                    <span className="flex items-center gap-2 text-sm text-stone-500">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-emerald-950">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-stone-100 flex justify-end gap-3">
                {(selectedBooking.status === 'Confirmed' || selectedBooking.status === 'Pending') && (
                  <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                    Cancel Booking
                  </button>
                )}
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="px-4 py-2 text-sm font-medium bg-emerald-950 text-white rounded-xl hover:bg-emerald-900 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyBookings;
