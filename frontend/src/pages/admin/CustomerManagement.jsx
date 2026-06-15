import React, { useState } from 'react';
import {
  Users,
  Plus,
  X,
  Search,
  Phone,
  Mail,
  Star,
  Globe,
  CheckCircle,
} from 'lucide-react';

const initialCustomers = [
  { id: 1, name: 'John Doe', type: 'VIP', country: 'United Kingdom', phone: '+44 20 7123 4567', email: 'john@example.com', bookings: 5 },
  { id: 2, name: 'Sarah Jenkins', type: 'Regular', country: 'Australia', phone: '+61 2 9876 5432', email: 'sarah.j@example.com', bookings: 2 },
  { id: 3, name: 'Kamal Perera', type: 'Corporate', country: 'Sri Lanka', phone: '+94 77 222 3344', email: 'kamal@company.lk', bookings: 12 },
  { id: 4, name: 'Emma Watson', type: 'Regular', country: 'USA', phone: '+1 555 019 8273', email: 'emma.w@example.com', bookings: 1 },
];

const CustomerManagement = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [newCustomer, setNewCustomer] = useState({
    name: '', type: 'Regular', country: 'Sri Lanka', phone: '', email: '', bookings: 0,
  });

  const filtered = customers.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === 'All' || c.type === typeFilter;
    return matchSearch && matchType;
  });

  const handleAdd = () => {
    if (!newCustomer.name || !newCustomer.email) return;
    setCustomers([
      { ...newCustomer, id: Date.now() },
      ...customers,
    ]);
    setNewCustomer({ name: '', type: 'Regular', country: 'Sri Lanka', phone: '', email: '', bookings: 0 });
    setIsModalOpen(false);
    setToastMessage('Customer added successfully!');
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-emerald-950">Customer Management</h2>
          <p className="text-sm text-stone-500 mt-1">View and manage guest profiles and loyalty programs.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-emerald-950 px-4 py-2.5 rounded-xl font-semibold shadow-sm transition-colors text-sm">
          <Plus className="w-4 h-4" />
          Add New Customer
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center"><Users className="w-5 h-5" /></div>
          <div><p className="text-xs text-stone-500 font-medium">Total Customers</p><p className="text-xl font-bold text-emerald-950">{customers.length + 1520}</p></div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center"><Star className="w-5 h-5" /></div>
          <div><p className="text-xs text-stone-500 font-medium">VIP Members</p><p className="text-xl font-bold text-purple-700">42</p></div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input type="text" placeholder="Search by name or email..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" />
        </div>
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500">
          <option value="All">All Types</option>
          <option value="Regular">Regular</option>
          <option value="VIP">VIP</option>
          <option value="Corporate">Corporate</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Customer Name</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Country</th>
                <th className="p-4 font-medium">Contact Details</th>
                <th className="p-4 font-medium">Total Bookings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 font-bold text-sm shrink-0">
                        {c.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span className="text-sm font-semibold text-emerald-950">{c.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                      c.type === 'VIP' ? 'bg-purple-100 text-purple-700' :
                      c.type === 'Corporate' ? 'bg-blue-100 text-blue-700' :
                      'bg-stone-100 text-stone-600'
                    }`}>
                      {c.type}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-medium text-stone-600">
                    <div className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-stone-400" />{c.country}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-stone-500 flex items-center gap-1"><Phone className="w-3 h-3" />{c.phone}</span>
                      <span className="text-xs text-stone-500 flex items-center gap-1"><Mail className="w-3 h-3" />{c.email}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-bold text-emerald-950">{c.bookings} Bookings</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={5} className="p-8 text-center text-stone-400 text-sm">No customers found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-stone-100">
                <h3 className="text-lg font-bold text-emerald-950">Add New Customer</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-xl hover:bg-stone-100 transition-colors"><X className="w-5 h-5 text-stone-500" /></button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Full Name</label>
                  <input type="text" value={newCustomer.name} onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="e.g. John Doe" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Customer Type</label>
                    <select value={newCustomer.type} onChange={(e) => setNewCustomer({ ...newCustomer, type: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                      <option>Regular</option>
                      <option>VIP</option>
                      <option>Corporate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Country</label>
                    <input type="text" value={newCustomer.country} onChange={(e) => setNewCustomer({ ...newCustomer, country: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="e.g. Sri Lanka" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Phone</label>
                    <input type="text" value={newCustomer.phone} onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                    <input type="email" value={newCustomer.email} onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 p-6 border-t border-stone-100">
                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-stone-200 text-sm font-semibold text-stone-600 hover:bg-stone-50 transition-colors">Cancel</button>
                <button onClick={handleAdd} className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-emerald-950 text-sm font-semibold shadow-sm transition-colors">Add Customer</button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-950 text-white px-5 py-3 rounded-xl shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-300">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default CustomerManagement;
