import React, { useState } from 'react';
import {
  CreditCard, Search, Filter, ChevronDown, Download, ArrowUpRight, ArrowDownRight, DollarSign, Clock, CheckCircle, XCircle, Calendar,
} from 'lucide-react';

const transactions = [
  { id: 'TXN-9001', bookingId: 'BK-2401', date: 'Jun 15, 2026', description: 'Siyala Kandy — Deluxe Suite', method: 'Visa ****4521', amount: 'LKR 45,000', status: 'Completed', type: 'debit' },
  { id: 'TXN-8990', bookingId: 'BK-2402', date: 'Jun 14, 2026', description: 'Siyala Galle Fort — Ocean View (Deposit)', method: 'Mastercard ****7892', amount: 'LKR 20,000', status: 'Pending', type: 'debit' },
  { id: 'TXN-8845', bookingId: 'BK-2275', date: 'Mar 01, 2026', description: 'Refund — Siyala Sigiriya Cancellation', method: 'Bank Transfer', amount: 'LKR 42,000', status: 'Completed', type: 'credit' },
  { id: 'TXN-8800', bookingId: 'BK-2290', date: 'Mar 15, 2026', description: 'Siyala Hikkaduwa — Beach Villa', method: 'Visa ****4521', amount: 'LKR 55,000', status: 'Completed', type: 'debit' },
  { id: 'TXN-8750', bookingId: 'BK-2315', date: 'Apr 02, 2026', description: 'Siyala Kandy — Standard Room', method: 'Cash', amount: 'LKR 22,000', status: 'Completed', type: 'debit' },
  { id: 'TXN-8700', bookingId: 'BK-2318', date: 'May 10, 2026', description: 'Siyala Ella — Mountain View', method: 'Visa ****4521', amount: 'LKR 38,000', status: 'Completed', type: 'debit' },
  { id: 'TXN-8650', bookingId: 'BK-2260', date: 'Jan 05, 2026', description: 'Siyala Yala — Safari Lodge', method: 'Mastercard ****7892', amount: 'LKR 48,000', status: 'Completed', type: 'debit' },
];

const statusColors = {
  Completed: 'bg-emerald-100 text-emerald-700',
  Pending: 'bg-amber-100 text-amber-700',
  Failed: 'bg-red-100 text-red-700',
};

const PaymentHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const totalSpent = transactions
    .filter(t => t.type === 'debit' && t.status === 'Completed')
    .reduce((sum, t) => sum + parseInt(t.amount.replace(/[^0-9]/g, '')), 0);

  const totalRefunded = transactions
    .filter(t => t.type === 'credit' && t.status === 'Completed')
    .reduce((sum, t) => sum + parseInt(t.amount.replace(/[^0-9]/g, '')), 0);

  const pendingAmount = transactions
    .filter(t => t.status === 'Pending')
    .reduce((sum, t) => sum + parseInt(t.amount.replace(/[^0-9]/g, '')), 0);

  const filteredTxns = transactions.filter(t => {
    const matchSearch = t.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        t.bookingId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === 'All' || t.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-stone-400">This Year</span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Total Spent</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">LKR {totalSpent.toLocaleString()}</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Pending</span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Pending Payments</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">LKR {pendingAmount.toLocaleString()}</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <ArrowDownRight className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-stone-400">Refunds</span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Total Refunded</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">LKR {totalRefunded.toLocaleString()}</p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search by Transaction ID, Booking ID, or Description..."
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
              className="pl-10 pr-8 py-2.5 rounded-xl border border-stone-200 text-sm font-medium text-emerald-950 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 appearance-none cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Transaction ID</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Description</th>
                <th className="p-4 font-medium">Method</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredTxns.map((txn, idx) => (
                <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-4 text-sm font-semibold text-emerald-950">{txn.id}</td>
                  <td className="p-4 text-sm text-stone-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />{txn.date}
                  </td>
                  <td className="p-4 text-sm text-stone-600 max-w-xs truncate">{txn.description}</td>
                  <td className="p-4 text-sm text-stone-500 flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5" />{txn.method}
                  </td>
                  <td className="p-4 text-sm font-semibold">
                    <span className={txn.type === 'credit' ? 'text-emerald-600' : 'text-emerald-950'}>
                      {txn.type === 'credit' ? '+' : '-'} {txn.amount}
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[txn.status]}`}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {txn.status === 'Completed' && (
                      <button className="p-1.5 rounded-lg text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors" title="Download Invoice">
                        <Download className="w-4 h-4" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredTxns.length === 0 && (
          <div className="p-12 text-center">
            <CreditCard className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <p className="text-stone-500 font-medium">No transactions found</p>
            <p className="text-stone-400 text-sm mt-1">Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
