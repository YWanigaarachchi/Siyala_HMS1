import React, { useState } from 'react';
import {
  Users,
  Plus,
  X,
  Search,
  UserCheck,
  UserX,
  Phone,
  Mail,
  Building,
  CheckCircle,
} from 'lucide-react';

const branchOptions = ['All Branches', 'System Wide', 'Siyala Kandy', 'Siyala Hikkaduwa', 'Siyala Colombo', 'Siyala Ella'];

const initialManagers = [
  { id: 1, name: 'Arjuna Wickramasinghe', role: 'General Manager', branch: 'System Wide', phone: '+94 77 000 1122', email: 'arjuna@siyala.lk', status: 'Active', joinDate: '2021-04-01' },
  { id: 2, name: 'Nadeeka Wijesinghe', role: 'Branch Manager', branch: 'Siyala Kandy', phone: '+94 77 111 2233', email: 'nadeeka@siyala.lk', status: 'Active', joinDate: '2023-03-15' },
  { id: 3, name: 'Ruwan Perera', role: 'Operations Manager', branch: 'Siyala Hikkaduwa', phone: '+94 71 222 3344', email: 'ruwan@siyala.lk', status: 'Active', joinDate: '2022-01-10' },
  { id: 4, name: 'Malini Dissanayake', role: 'Assistant Manager', branch: 'Siyala Colombo', phone: '+94 77 777 8899', email: 'malini@siyala.lk', status: 'On Leave', joinDate: '2022-09-30' },
];

const ManagerManagement = () => {
  const [managers, setManagers] = useState(initialManagers);
  const [search, setSearch] = useState('');
  const [branchFilter, setBranchFilter] = useState('All Branches');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [newManager, setNewManager] = useState({
    name: '', role: '', branch: 'Siyala Kandy', phone: '', email: '',
  });

  const filtered = managers.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.role.toLowerCase().includes(search.toLowerCase());
    const matchBranch = branchFilter === 'All Branches' || m.branch === branchFilter;
    return matchSearch && matchBranch;
  });

  const activeCount = managers.filter((m) => m.status === 'Active').length;

  const handleAdd = () => {
    if (!newManager.name || !newManager.role) return;
    setManagers([
      ...managers,
      { ...newManager, id: Date.now(), status: 'Active', joinDate: new Date().toISOString().split('T')[0] },
    ]);
    setNewManager({ name: '', role: '', branch: 'Siyala Kandy', phone: '', email: '' });
    setIsModalOpen(false);
    setToastMessage('Manager added successfully!');
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-emerald-950">Manager Management</h2>
          <p className="text-sm text-stone-500 mt-1">View and manage hotel managers across properties.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-xl font-semibold shadow-sm transition-colors text-sm">
          <Plus className="w-4 h-4" />
          Add New Manager
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-2xl">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><Users className="w-5 h-5" /></div>
          <div><p className="text-xs text-stone-500 font-medium">Total Managers</p><p className="text-xl font-bold text-emerald-950">{managers.length}</p></div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><UserCheck className="w-5 h-5" /></div>
          <div><p className="text-xs text-stone-500 font-medium">Active Managers</p><p className="text-xl font-bold text-blue-700">{activeCount}</p></div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input type="text" placeholder="Search managers..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" />
        </div>
        <select value={branchFilter} onChange={(e) => setBranchFilter(e.target.value)} className="px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500">
          {branchOptions.map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Branch</th>
                <th className="p-4 font-medium">Contact</th>
                <th className="p-4 font-medium">Joined</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map((m) => (
                <tr key={m.id} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                        {m.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span className="text-sm font-semibold text-emerald-950">{m.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-stone-600">{m.role}</td>
                  <td className="p-4 text-sm font-medium text-amber-600">
                    <div className="flex items-center gap-1.5"><Building className="w-4 h-4 text-stone-400" />{m.branch}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-stone-500 flex items-center gap-1"><Phone className="w-3 h-3" />{m.phone}</span>
                      <span className="text-xs text-stone-500 flex items-center gap-1"><Mail className="w-3 h-3" />{m.email}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-stone-500">{m.joinDate}</td>
                  <td className="p-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${m.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {m.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="p-8 text-center text-stone-400 text-sm">No managers found.</td></tr>
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
                <h3 className="text-lg font-bold text-emerald-950">Add New Manager</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-xl hover:bg-stone-100 transition-colors"><X className="w-5 h-5 text-stone-500" /></button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Full Name</label>
                  <input type="text" value={newManager.name} onChange={(e) => setNewManager({ ...newManager, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Role / Position</label>
                  <input type="text" value={newManager.role} onChange={(e) => setNewManager({ ...newManager, role: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="e.g. General Manager" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Branch</label>
                  <select value={newManager.branch} onChange={(e) => setNewManager({ ...newManager, branch: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                    {branchOptions.filter(b => b !== 'All Branches').map(b => <option key={b}>{b}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Phone</label>
                    <input type="text" value={newManager.phone} onChange={(e) => setNewManager({ ...newManager, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                    <input type="email" value={newManager.email} onChange={(e) => setNewManager({ ...newManager, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 p-6 border-t border-stone-100">
                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-stone-200 text-sm font-semibold text-stone-600 hover:bg-stone-50 transition-colors">Cancel</button>
                <button onClick={handleAdd} className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold shadow-sm transition-colors">Add Manager</button>
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

export default ManagerManagement;
