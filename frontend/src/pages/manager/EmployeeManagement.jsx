import React, { useState } from 'react';
import { Users, Search, Plus, Edit2, Trash2, Mail, Phone, ShieldCheck, X } from 'lucide-react';

const initialEmployees = [
  { id: 1, name: 'Saman Kumara', role: 'General Manager', dept: 'Management', location: 'Kandy', email: 'saman@siyala.lk', phone: '+94 77 123 4567', status: 'Active', joined: '2020-03-15', avatar: 'SK' },
  { id: 2, name: 'Dilini Perera', role: 'Front Desk Manager', dept: 'Operations', location: 'Kandy', email: 'dilini@siyala.lk', phone: '+94 71 234 5678', status: 'Active', joined: '2021-06-01', avatar: 'DP' },
  { id: 3, name: 'Chamara Silva', role: 'Head Chef', dept: 'F&B', location: 'Hikkaduwa', email: 'chamara@siyala.lk', phone: '+94 76 345 6789', status: 'Active', joined: '2019-11-20', avatar: 'CS' },
  { id: 4, name: 'Nadeeka Fernando', role: 'Spa Therapist', dept: 'Wellness', location: 'Kandy', email: 'nadeeka@siyala.lk', phone: '+94 70 456 7890', status: 'On Leave', joined: '2022-02-10', avatar: 'NF' },
  { id: 5, name: 'Rasika Bandara', role: 'Housekeeping Supervisor', dept: 'Housekeeping', location: 'Both', email: 'rasika@siyala.lk', phone: '+94 72 567 8901', status: 'Active', joined: '2020-08-05', avatar: 'RB' },
  { id: 6, name: 'Ashan Wijesinghe', role: 'Security Officer', dept: 'Security', location: 'Hikkaduwa', email: 'ashan@siyala.lk', phone: '+94 75 678 9012', status: 'Active', joined: '2023-01-15', avatar: 'AW' },
  { id: 7, name: 'Tharini Jayawardena', role: 'Marketing Executive', dept: 'Marketing', location: 'Kandy', email: 'tharini@siyala.lk', phone: '+94 74 789 0123', status: 'Active', joined: '2021-09-30', avatar: 'TJ' },
  { id: 8, name: 'Pradeep Rathnayake', role: 'Maintenance Technician', dept: 'Maintenance', location: 'Both', email: 'pradeep@siyala.lk', phone: '+94 77 890 1234', status: 'Inactive', joined: '2018-04-22', avatar: 'PR' },
];

const DEPT_COLORS = {
  Management: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  Operations: 'bg-blue-50 text-blue-700 border-blue-200',
  'F&B': 'bg-amber-50 text-amber-700 border-amber-200',
  Wellness: 'bg-pink-50 text-pink-700 border-pink-200',
  Housekeeping: 'bg-purple-50 text-purple-700 border-purple-200',
  Security: 'bg-slate-100 text-slate-600 border-slate-200',
  Marketing: 'bg-orange-50 text-orange-700 border-orange-200',
  Maintenance: 'bg-stone-100 text-stone-600 border-stone-200',
};

const STATUS_COLORS = {
  Active: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  'On Leave': 'text-amber-600 bg-amber-50 border-amber-200',
  Inactive: 'text-stone-500 bg-stone-100 border-stone-200',
};

const AVATAR_COLORS = ['bg-emerald-600', 'bg-amber-500', 'bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-orange-500'];

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [search, setSearch] = useState('');
  const [viewEmp, setViewEmp] = useState(null);
  const [isGrid, setIsGrid] = useState(false);

  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.role.toLowerCase().includes(search.toLowerCase()) ||
    e.dept.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setEmployees(prev => prev.filter(e => e.id !== id));
    if (viewEmp?.id === id) setViewEmp(null);
  };

  const deptCounts = employees.reduce((acc, e) => {
    acc[e.dept] = (acc[e.dept] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-emerald-950">Employee Management</h1>
          <p className="text-stone-400 text-sm mt-1">Manage your hotel staff, roles, and departments.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-950 text-amber-400 font-bold text-sm rounded-xl hover:bg-emerald-800 transition-all shadow-lg">
          <Plus className="w-4 h-4" /> Add Employee
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Staff', value: employees.length },
          { label: 'Active', value: employees.filter(e => e.status === 'Active').length },
          { label: 'On Leave', value: employees.filter(e => e.status === 'On Leave').length },
          { label: 'Departments', value: Object.keys(deptCounts).length },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm">
            <p className="text-3xl font-bold text-emerald-950 mb-1">{s.value}</p>
            <p className="text-sm text-stone-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Dept Breakdown */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
        <h3 className="text-sm font-bold text-emerald-950 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-500" /> Department Breakdown
        </h3>
        <div className="flex flex-wrap gap-3">
          {Object.entries(deptCounts).map(([dept, count]) => (
            <div key={dept} className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold ${DEPT_COLORS[dept] || 'bg-stone-100 text-stone-500'}`}>
              {dept} <span className="font-bold">({count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, role, or department..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
        <button
          onClick={() => setIsGrid(!isGrid)}
          className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${isGrid ? 'bg-emerald-950 text-amber-400 border-emerald-950' : 'bg-white text-stone-500 border-stone-200'}`}
        >
          {isGrid ? 'Table View' : 'Grid View'}
        </button>
      </div>

      {/* Employee List */}
      {isGrid ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((emp, i) => (
            <div key={emp.id} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} text-white font-bold text-xl flex items-center justify-center mb-3 shadow-lg`}>
                {emp.avatar}
              </div>
              <h3 className="font-bold text-emerald-950 mb-1">{emp.name}</h3>
              <p className="text-xs text-stone-400 mb-2">{emp.role}</p>
              <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border mb-4 ${STATUS_COLORS[emp.status]}`}>{emp.status}</span>
              <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border mb-4 ${DEPT_COLORS[emp.dept] || ''}`}>{emp.dept}</span>
              <div className="flex gap-2 mt-auto">
                <button onClick={() => setViewEmp(emp)} className="p-2 rounded-lg text-stone-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"><Mail className="w-4 h-4" /></button>
                <button className="p-2 rounded-lg text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"><Edit2 className="w-4 h-4" /></button>
                <button onClick={() => handleDelete(emp.id)} className="p-2 rounded-lg text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-stone-50 border-b border-stone-100">
                <tr>
                  {['Employee', 'Role', 'Department', 'Location', 'Status', 'Joined', 'Actions'].map(h => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-bold text-stone-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {filtered.map((emp, i) => (
                  <tr key={emp.id} className="hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} text-white font-bold text-sm flex items-center justify-center shrink-0`}>
                          {emp.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-emerald-950">{emp.name}</p>
                          <p className="text-xs text-stone-400">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-stone-600">{emp.role}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${DEPT_COLORS[emp.dept] || ''}`}>{emp.dept}</span>
                    </td>
                    <td className="px-5 py-4 text-stone-500">{emp.location}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${STATUS_COLORS[emp.status]}`}>{emp.status}</span>
                    </td>
                    <td className="px-5 py-4 text-stone-400 whitespace-nowrap">{emp.joined}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => setViewEmp(emp)} className="p-1.5 rounded-lg text-stone-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"><Phone className="w-4 h-4" /></button>
                        <button className="p-1.5 rounded-lg text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"><Edit2 className="w-4 h-4" /></button>
                        <button onClick={() => handleDelete(emp.id)} className="p-1.5 rounded-lg text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {viewEmp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-emerald-950/70 backdrop-blur-sm" onClick={() => setViewEmp(null)} />
          <div className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl">
            <button onClick={() => setViewEmp(null)} className="absolute top-5 right-5 p-2 bg-stone-100 rounded-full text-stone-400 hover:text-red-500 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center text-center mb-6">
              <div className={`w-20 h-20 rounded-full ${AVATAR_COLORS[employees.findIndex(e => e.id === viewEmp.id) % AVATAR_COLORS.length]} text-white font-bold text-2xl flex items-center justify-center mb-4 shadow-xl`}>
                {viewEmp.avatar}
              </div>
              <h3 className="text-2xl font-serif font-bold text-emerald-950">{viewEmp.name}</h3>
              <p className="text-stone-400 text-sm mt-1">{viewEmp.role}</p>
              <span className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-semibold border ${STATUS_COLORS[viewEmp.status]}`}>{viewEmp.status}</span>
            </div>
            <div className="space-y-3 text-sm">
              {[
                { icon: Mail, l: 'Email', v: viewEmp.email },
                { icon: Phone, l: 'Phone', v: viewEmp.phone },
                { icon: ShieldCheck, l: 'Department', v: viewEmp.dept },
                { icon: Users, l: 'Location', v: viewEmp.location },
              ].map(({ icon: Icon, l, v }) => (
                <div key={l} className="flex items-center gap-3 py-2 border-b border-stone-50">
                  <Icon className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-stone-400 w-24 shrink-0">{l}</span>
                  <span className="font-semibold text-emerald-950 truncate">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeManagement;
