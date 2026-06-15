import React, { useState } from 'react';
import { CalendarCheck, Search, Filter, Eye, Edit2, Trash2, Plus, X, Check } from 'lucide-react';

const initialReservations = [
  { id: '#BK-1042', guest: 'Amara Perera', email: 'amara@example.com', room: 'Deluxe Suite 301', location: 'Kandy', checkin: '2026-06-14', checkout: '2026-06-17', guests: 2, total: 'LKR 84,000', status: 'Confirmed' },
  { id: '#BK-1041', guest: 'James Wilson', email: 'james@example.com', room: 'Ocean View 112', location: 'Hikkaduwa', checkin: '2026-06-14', checkout: '2026-06-16', guests: 1, total: 'LKR 70,000', status: 'Pending' },
  { id: '#BK-1040', guest: 'Priya Kumar', email: 'priya@example.com', room: 'Heritage Loft 202', location: 'Kandy', checkin: '2026-06-13', checkout: '2026-06-18', guests: 3, total: 'LKR 225,000', status: 'Confirmed' },
  { id: '#BK-1039', guest: 'Lena Schmidt', email: 'lena@example.com', room: 'Beach Cabana 05', location: 'Hikkaduwa', checkin: '2026-06-13', checkout: '2026-06-15', guests: 2, total: 'LKR 44,000', status: 'Checked-In' },
  { id: '#BK-1038', guest: 'Rohan Bandara', email: 'rohan@example.com', room: 'Standard 401', location: 'Kandy', checkin: '2026-06-12', checkout: '2026-06-14', guests: 1, total: 'LKR 30,000', status: 'Checked-Out' },
  { id: '#BK-1037', guest: 'Mei Tanaka', email: 'mei@example.com', room: 'Penthouse', location: 'Hikkaduwa', checkin: '2026-06-11', checkout: '2026-06-18', guests: 4, total: 'LKR 455,000', status: 'Checked-In' },
  { id: '#BK-1036', guest: 'Carlos Reyes', email: 'carlos@example.com', room: 'Royal Villa', location: 'Kandy', checkin: '2026-06-10', checkout: '2026-06-12', guests: 2, total: 'LKR 170,000', status: 'Checked-Out' },
  { id: '#BK-1035', guest: 'Sarah Chen', email: 'sarah@example.com', room: 'Family Unit', location: 'Hikkaduwa', checkin: '2026-06-15', checkout: '2026-06-20', guests: 5, total: 'LKR 200,000', status: 'Pending' },
];

const STATUS_STYLES = {
  Confirmed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Pending: 'bg-amber-50 text-amber-700 border-amber-200',
  'Checked-In': 'bg-blue-50 text-blue-700 border-blue-200',
  'Checked-Out': 'bg-stone-100 text-stone-500 border-stone-200',
  Cancelled: 'bg-red-50 text-red-600 border-red-200',
};

const ALL_STATUSES = ['All', 'Confirmed', 'Pending', 'Checked-In', 'Checked-Out'];

const ReservationManagement = () => {
  const [reservations, setReservations] = useState(initialReservations);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [viewReservation, setViewReservation] = useState(null);
  const [showNewBookingModal, setShowNewBookingModal] = useState(false);

  const filtered = reservations.filter(r => {
    const matchSearch = r.guest.toLowerCase().includes(search.toLowerCase()) || r.id.includes(search);
    const matchStatus = filterStatus === 'All' || r.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const handleDelete = (id) => {
    setReservations(prev => prev.filter(r => r.id !== id));
    if (viewReservation?.id === id) setViewReservation(null);
  };

  const handleStatusChange = (id, newStatus) => {
    setReservations(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
    setViewReservation(prev => prev?.id === id ? { ...prev, status: newStatus } : prev);
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-emerald-950">Reservation Management</h1>
          <p className="text-stone-400 text-sm mt-1">Track and manage all guest reservations across your properties.</p>
        </div>
        <button 
          onClick={() => setShowNewBookingModal(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-emerald-950 text-amber-400 font-bold text-sm rounded-xl hover:bg-emerald-800 transition-all shadow-lg"
        >
          <Plus className="w-4 h-4" /> New Reservation
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by guest name or booking ID..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {ALL_STATUSES.map(s => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${filterStatus === s ? 'bg-emerald-950 text-amber-400 border-emerald-950' : 'bg-white text-stone-500 border-stone-200 hover:border-amber-400'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Chips */}
      <div className="flex gap-3 flex-wrap text-xs font-bold">
        {ALL_STATUSES.slice(1).map(s => {
          const count = reservations.filter(r => r.status === s).length;
          return (
            <span key={s} className={`px-3 py-1.5 rounded-full border ${STATUS_STYLES[s]}`}>
              {count} {s}
            </span>
          );
        })}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-stone-50 border-b border-stone-100">
              <tr>
                {['Booking ID', 'Guest', 'Room', 'Location', 'Check-In', 'Check-Out', 'Total', 'Status', 'Actions'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-bold text-stone-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={9} className="text-center py-12 text-stone-400">No reservations found.</td></tr>
              ) : filtered.map(r => (
                <tr key={r.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 font-mono font-bold text-emerald-700 text-xs whitespace-nowrap">{r.id}</td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-emerald-950">{r.guest}</p>
                    <p className="text-xs text-stone-400">{r.email}</p>
                  </td>
                  <td className="px-6 py-4 text-stone-500 whitespace-nowrap">{r.room}</td>
                  <td className="px-6 py-4 text-stone-500">{r.location}</td>
                  <td className="px-6 py-4 text-stone-500 whitespace-nowrap">{r.checkin}</td>
                  <td className="px-6 py-4 text-stone-500 whitespace-nowrap">{r.checkout}</td>
                  <td className="px-6 py-4 font-semibold text-emerald-800 whitespace-nowrap">{r.total}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${STATUS_STYLES[r.status]}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => setViewReservation(r)} className="p-1.5 rounded-lg text-stone-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(r.id)} className="p-1.5 rounded-lg text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {viewReservation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-emerald-950/70 backdrop-blur-sm" onClick={() => setViewReservation(null)} />
          <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <button onClick={() => setViewReservation(null)} className="absolute top-5 right-5 p-2 bg-stone-100 rounded-full text-stone-400 hover:text-red-500 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">Booking Details</span>
              <h3 className="text-2xl font-serif font-bold text-emerald-950 mt-1">{viewReservation.id}</h3>
            </div>
            <div className="space-y-3 text-sm mb-6">
              {[
                { l: 'Guest', v: viewReservation.guest },
                { l: 'Email', v: viewReservation.email },
                { l: 'Room', v: viewReservation.room },
                { l: 'Location', v: viewReservation.location },
                { l: 'Check-In', v: viewReservation.checkin },
                { l: 'Check-Out', v: viewReservation.checkout },
                { l: 'Guests', v: viewReservation.guests },
                { l: 'Total', v: viewReservation.total },
              ].map(({ l, v }) => (
                <div key={l} className="flex justify-between py-2 border-b border-stone-50">
                  <span className="text-stone-400 font-medium">{l}</span>
                  <span className="font-semibold text-emerald-950">{v}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Update Status</p>
              <div className="flex flex-wrap gap-2">
                {ALL_STATUSES.slice(1).map(s => (
                  <button
                    key={s}
                    onClick={() => handleStatusChange(viewReservation.id, s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${viewReservation.status === s ? 'bg-emerald-950 text-amber-400 border-emerald-950 scale-105' : `border-stone-200 text-stone-500 hover:border-emerald-400`}`}
                  >
                    {viewReservation.status === s && <Check className="w-3 h-3 inline mr-1" />}{s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Reservation Modal */}
      {showNewBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-emerald-950/70 backdrop-blur-sm" onClick={() => setShowNewBookingModal(false)} />
          <div className="relative bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl animate-in zoom-in-95">
            <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-1">New Reservation</h2>
            <p className="text-stone-400 text-sm mb-6">Create a new booking manually.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); setShowNewBookingModal(false); }} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-emerald-950">Guest Name</label>
                  <input required className="w-full px-4 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-emerald-950">Email Address</label>
                  <input required type="email" className="w-full px-4 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-emerald-950">Location</label>
                  <select className="w-full px-4 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50">
                    <option>Kandy Heritage</option>
                    <option>Hikkaduwa Beach</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-emerald-950">Room Type</label>
                  <select className="w-full px-4 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50">
                    <option>Standard Room</option>
                    <option>Deluxe Suite</option>
                    <option>Ocean View</option>
                    <option>Penthouse</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-emerald-950">Check-in Date</label>
                  <input required type="date" className="w-full px-4 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-emerald-950">Check-out Date</label>
                  <input required type="date" className="w-full px-4 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-emerald-950">Number of Guests</label>
                  <input required type="number" min="1" className="w-full px-4 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-emerald-950">Total Amount (LKR)</label>
                  <input required type="text" placeholder="e.g. 50000" className="w-full px-4 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50" />
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setShowNewBookingModal(false)} className="flex-1 py-2.5 rounded-xl font-bold text-sm text-stone-500 hover:bg-stone-100 transition-colors">Cancel</button>
                <button type="submit" className="flex-1 py-2.5 rounded-xl font-bold text-sm bg-amber-500 text-emerald-950 hover:bg-amber-400 transition-colors">Create Booking</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default ReservationManagement;
