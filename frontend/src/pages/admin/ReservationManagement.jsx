import React, { useState } from 'react';
import {
  CalendarCheck,
  Search,
  Filter,
  X,
  Eye,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from 'lucide-react';

const allReservations = [
  { id: 'RES-1021', branch: 'Siyala Kandy', guest: 'Kamal Perera', room: 'Deluxe Suite', checkIn: '2026-06-18', checkOut: '2026-06-20', amount: 45000, status: 'Confirmed', phone: '+94 77 123 4567', email: 'kamal@email.com', guests: 2 },
  { id: 'RES-1022', branch: 'Siyala Hikkaduwa', guest: 'Sarah Jenkins', room: 'Ocean View', checkIn: '2026-06-19', checkOut: '2026-06-23', amount: 38000, status: 'Pending', phone: '+44 20 7946 0958', email: 'sarah.j@email.com', guests: 3 },
  { id: 'RES-1023', branch: 'Siyala Kandy', guest: 'Nimal Silva', room: 'Standard', checkIn: '2026-06-20', checkOut: '2026-06-21', amount: 15000, status: 'Confirmed', phone: '+94 71 234 5678', email: 'nimal.s@email.com', guests: 1 },
  { id: 'RES-1024', branch: 'Siyala Colombo', guest: 'Emma Watson', room: 'Presidential', checkIn: '2026-06-22', checkOut: '2026-06-25', amount: 120000, status: 'Cancelled', phone: '+1 310 555 0199', email: 'emma.w@email.com', guests: 2 },
  { id: 'RES-1025', branch: 'Siyala Hikkaduwa', guest: 'Ruwan Fernando', room: 'Beach Villa', checkIn: '2026-06-17', checkOut: '2026-06-19', amount: 55000, status: 'Confirmed', phone: '+94 76 345 6789', email: 'ruwan.f@email.com', guests: 4 },
  { id: 'RES-1026', branch: 'Siyala Ella', guest: 'Maria Schmidt', room: 'Mountain View', checkIn: '2026-06-21', checkOut: '2026-06-24', amount: 32000, status: 'Pending', phone: '+49 30 123 4567', email: 'maria.s@email.com', guests: 2 },
  { id: 'RES-1027', branch: 'Siyala Colombo', guest: 'Ashan Jayawardena', room: 'Business Suite', checkIn: '2026-06-16', checkOut: '2026-06-17', amount: 28000, status: 'Confirmed', phone: '+94 70 456 7890', email: 'ashan.j@email.com', guests: 1 },
  { id: 'RES-1028', branch: 'Siyala Kandy', guest: 'James O\'Brien', room: 'Heritage Room', checkIn: '2026-06-25', checkOut: '2026-06-28', amount: 67000, status: 'Pending', phone: '+353 1 555 1234', email: 'james.ob@email.com', guests: 2 },
];

const branches = ['All Branches', 'Siyala Kandy', 'Siyala Hikkaduwa', 'Siyala Colombo', 'Siyala Ella'];
const statuses = ['All', 'Confirmed', 'Pending', 'Cancelled'];

const ReservationManagement = () => {
  const [search, setSearch] = useState('');
  const [branchFilter, setBranchFilter] = useState('All Branches');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedRes, setSelectedRes] = useState(null);

  const filtered = allReservations.filter((r) => {
    const matchSearch =
      r.guest.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase());
    const matchBranch = branchFilter === 'All Branches' || r.branch === branchFilter;
    const matchStatus = statusFilter === 'All' || r.status === statusFilter;
    return matchSearch && matchBranch && matchStatus;
  });

  const counts = {
    total: allReservations.length,
    confirmed: allReservations.filter((r) => r.status === 'Confirmed').length,
    pending: allReservations.filter((r) => r.status === 'Pending').length,
    cancelled: allReservations.filter((r) => r.status === 'Cancelled').length,
  };

  const formatCurrency = (v) => `LKR ${v.toLocaleString()}`;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-emerald-950">Reservation Management</h2>
        <p className="text-sm text-stone-500 mt-1">Track and manage bookings across all branches.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CalendarCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-stone-500 font-medium">Total</p>
            <p className="text-xl font-bold text-emerald-950">{counts.total}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-stone-500 font-medium">Confirmed</p>
            <p className="text-xl font-bold text-emerald-700">{counts.confirmed}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-stone-500 font-medium">Pending</p>
            <p className="text-xl font-bold text-amber-700">{counts.pending}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <XCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-stone-500 font-medium">Cancelled</p>
            <p className="text-xl font-bold text-red-700">{counts.cancelled}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search by guest or booking ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
          />
        </div>
        <select
          value={branchFilter}
          onChange={(e) => setBranchFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
        >
          {branches.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
        <div className="flex gap-2">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                statusFilter === s
                  ? 'bg-amber-500 text-emerald-950 shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Reservations Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Booking ID</th>
                <th className="p-4 font-medium">Branch</th>
                <th className="p-4 font-medium">Guest</th>
                <th className="p-4 font-medium">Room</th>
                <th className="p-4 font-medium">Check-in</th>
                <th className="p-4 font-medium">Check-out</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map((r) => (
                <tr key={r.id} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-4 text-sm font-semibold text-emerald-950">#{r.id}</td>
                  <td className="p-4 text-sm font-medium text-amber-600">{r.branch}</td>
                  <td className="p-4 text-sm text-stone-700">{r.guest}</td>
                  <td className="p-4 text-sm text-stone-600">{r.room}</td>
                  <td className="p-4 text-sm text-stone-600">{r.checkIn}</td>
                  <td className="p-4 text-sm text-stone-600">{r.checkOut}</td>
                  <td className="p-4 text-sm font-medium text-emerald-950">{formatCurrency(r.amount)}</td>
                  <td className="p-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        r.status === 'Confirmed'
                          ? 'bg-emerald-100 text-emerald-700'
                          : r.status === 'Pending'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => setSelectedRes(r)}
                      className="p-2 rounded-lg hover:bg-emerald-50 text-emerald-600 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="p-8 text-center text-stone-400 text-sm">
                    No reservations found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedRes && (
        <>
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedRes(null)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-stone-100">
                <h3 className="text-lg font-bold text-emerald-950">Booking #{selectedRes.id}</h3>
                <button onClick={() => setSelectedRes(null)} className="p-2 rounded-xl hover:bg-stone-100 transition-colors">
                  <X className="w-5 h-5 text-stone-500" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-stone-500">Guest</span>
                  <span className="text-sm font-semibold text-emerald-950">{selectedRes.guest}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-stone-500">Branch</span>
                  <span className="text-sm font-medium text-amber-600">{selectedRes.branch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-stone-500">Room</span>
                  <span className="text-sm text-stone-700">{selectedRes.room}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-stone-500">Guests</span>
                  <span className="text-sm text-stone-700">{selectedRes.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-stone-500">Check-in</span>
                  <span className="text-sm text-stone-700">{selectedRes.checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-stone-500">Check-out</span>
                  <span className="text-sm text-stone-700">{selectedRes.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-stone-500">Phone</span>
                  <span className="text-sm text-stone-700">{selectedRes.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-stone-500">Email</span>
                  <span className="text-sm text-stone-700">{selectedRes.email}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-stone-100">
                  <span className="text-sm font-semibold text-stone-700">Total Amount</span>
                  <span className="text-lg font-bold text-emerald-950">{formatCurrency(selectedRes.amount)}</span>
                </div>
                <div className="flex justify-center pt-2">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                      selectedRes.status === 'Confirmed'
                        ? 'bg-emerald-100 text-emerald-700'
                        : selectedRes.status === 'Pending'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {selectedRes.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReservationManagement;
