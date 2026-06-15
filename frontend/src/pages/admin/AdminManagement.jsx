import React, { useState } from 'react';
import {
  ShieldCheck,
  Plus,
  X,
  Search,
  Phone,
  Mail,
  Globe,
} from 'lucide-react';

const initialAdmins = [
  { id: 1, name: 'System Administrator', role: 'Super Admin', scope: 'Global Access', phone: '+94 77 123 4567', email: 'admin@siyala.lk', status: 'Active', joinDate: '2020-01-01' },
  { id: 2, name: 'Saman Perera', role: 'IT Admin', scope: 'IT Support', phone: '+94 71 987 6543', email: 'it.saman@siyala.lk', status: 'Active', joinDate: '2021-06-15' },
  { id: 3, name: 'Nilmini Silva', role: 'Finance Admin', scope: 'Financial Access', phone: '+94 76 555 4444', email: 'finance@siyala.lk', status: 'Active', joinDate: '2022-03-20' },
];

const AdminManagement = () => {
  const [admins, setAdmins] = useState(initialAdmins);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    name: '', role: '', scope: 'Global Access', phone: '', email: '',
  });

  const filtered = admins.filter((a) => {
    return a.name.toLowerCase().includes(search.toLowerCase()) || a.role.toLowerCase().includes(search.toLowerCase());
  });

  const handleAdd = () => {
    if (!newAdmin.name || !newAdmin.role) return;
    setAdmins([
      ...admins,
      { ...newAdmin, id: Date.now(), status: 'Active', joinDate: new Date().toISOString().split('T')[0] },
    ]);
    setNewAdmin({ name: '', role: '', scope: 'Global Access', phone: '', email: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-emerald-950">Admin Management</h2>
          <p className="text-sm text-stone-500 mt-1">Manage system administrators and their access scopes.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl font-semibold shadow-sm transition-colors text-sm">
          <Plus className="w-4 h-4" />
          Add New Admin
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-sm">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><ShieldCheck className="w-5 h-5" /></div>
          <div><p className="text-xs text-stone-500 font-medium">Total Admins</p><p className="text-xl font-bold text-emerald-950">{admins.length}</p></div>
        </div>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
        <input type="text" placeholder="Search admins..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Access Scope</th>
                <th className="p-4 font-medium">Contact</th>
                <th className="p-4 font-medium">Joined</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map((a) => (
                <tr key={a.id} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                        {a.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span className="text-sm font-semibold text-emerald-950">{a.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-stone-600">{a.role}</td>
                  <td className="p-4 text-sm font-medium text-stone-600">
                    <div className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-stone-400" />{a.scope}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-stone-500 flex items-center gap-1"><Phone className="w-3 h-3" />{a.phone}</span>
                      <span className="text-xs text-stone-500 flex items-center gap-1"><Mail className="w-3 h-3" />{a.email}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-stone-500">{a.joinDate}</td>
                  <td className="p-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${a.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {a.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="p-8 text-center text-stone-400 text-sm">No admins found.</td></tr>
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
                <h3 className="text-lg font-bold text-emerald-950">Add New Admin</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-xl hover:bg-stone-100 transition-colors"><X className="w-5 h-5 text-stone-500" /></button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Full Name</label>
                  <input type="text" value={newAdmin.name} onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Role / Position</label>
                    <input type="text" value={newAdmin.role} onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="e.g. IT Admin" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Access Scope</label>
                    <select value={newAdmin.scope} onChange={(e) => setNewAdmin({ ...newAdmin, scope: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                      <option>Global Access</option>
                      <option>IT Support</option>
                      <option>Financial Access</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Phone</label>
                    <input type="text" value={newAdmin.phone} onChange={(e) => setNewAdmin({ ...newAdmin, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                    <input type="email" value={newAdmin.email} onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 p-6 border-t border-stone-100">
                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-stone-200 text-sm font-semibold text-stone-600 hover:bg-stone-50 transition-colors">Cancel</button>
                <button onClick={handleAdd} className="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold shadow-sm transition-colors">Add Admin</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminManagement;
