import React, { useState } from 'react';
import {
  Users,
  Plus,
  X,
  Search,
  UserCheck,
  UserX,
  UserPlus,
  Phone,
  Mail,
  CheckCircle,
} from 'lucide-react';

const departments = ['All', 'Front Desk', 'Housekeeping', 'Kitchen', 'Management', 'Maintenance', 'Security'];
const branchOptions = ['All Branches', 'Siyala Kandy', 'Siyala Hikkaduwa', 'Siyala Colombo', 'Siyala Ella'];

const initialEmployees = [
  { id: 1, name: 'Nadeeka Wijesinghe', role: 'Front Desk Manager', department: 'Front Desk', branch: 'Siyala Kandy', phone: '+94 77 111 2233', email: 'nadeeka@siyala.lk', status: 'Active', joinDate: '2023-03-15' },
  { id: 2, name: 'Chaminda Rathnayake', role: 'Head Chef', department: 'Kitchen', branch: 'Siyala Hikkaduwa', phone: '+94 71 222 3344', email: 'chaminda@siyala.lk', status: 'Active', joinDate: '2022-01-10' },
  { id: 3, name: 'Priyanka Fernando', role: 'Housekeeping Supervisor', department: 'Housekeeping', branch: 'Siyala Colombo', phone: '+94 76 333 4455', email: 'priyanka@siyala.lk', status: 'On Leave', joinDate: '2023-08-22' },
  { id: 4, name: 'Saman Kumara', role: 'Security Officer', department: 'Security', branch: 'Siyala Kandy', phone: '+94 70 444 5566', email: 'saman@siyala.lk', status: 'Active', joinDate: '2024-02-01' },
  { id: 5, name: 'Dilini Perera', role: 'Receptionist', department: 'Front Desk', branch: 'Siyala Ella', phone: '+94 75 555 6677', email: 'dilini@siyala.lk', status: 'Active', joinDate: '2025-11-05' },
  { id: 6, name: 'Rohan Jayasuriya', role: 'Maintenance Lead', department: 'Maintenance', branch: 'Siyala Hikkaduwa', phone: '+94 78 666 7788', email: 'rohan@siyala.lk', status: 'Active', joinDate: '2023-06-18' },
  { id: 7, name: 'Malini Dissanayake', role: 'Assistant Manager', department: 'Management', branch: 'Siyala Colombo', phone: '+94 77 777 8899', email: 'malini@siyala.lk', status: 'On Leave', joinDate: '2022-09-30' },
  { id: 8, name: 'Kasun Bandara', role: 'Sous Chef', department: 'Kitchen', branch: 'Siyala Kandy', phone: '+94 71 888 9900', email: 'kasun@siyala.lk', status: 'Active', joinDate: '2026-01-12' },
  { id: 9, name: 'Thilini Gunawardena', role: 'Room Attendant', department: 'Housekeeping', branch: 'Siyala Hikkaduwa', phone: '+94 76 999 0011', email: 'thilini@siyala.lk', status: 'Active', joinDate: '2025-07-20' },
  { id: 10, name: 'Arjuna Wickramasinghe', role: 'General Manager', department: 'Management', branch: 'Siyala Kandy', phone: '+94 77 000 1122', email: 'arjuna@siyala.lk', status: 'Active', joinDate: '2021-04-01' },
];

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  const [branchFilter, setBranchFilter] = useState('All Branches');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [newEmp, setNewEmp] = useState({
    name: '', role: '', department: 'Front Desk', branch: 'Siyala Kandy', phone: '', email: '',
  });

  const filtered = employees.filter((e) => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.role.toLowerCase().includes(search.toLowerCase());
    const matchDept = deptFilter === 'All' || e.department === deptFilter;
    const matchBranch = branchFilter === 'All Branches' || e.branch === branchFilter;
    return matchSearch && matchDept && matchBranch;
  });

  const activeCount = employees.filter((e) => e.status === 'Active').length;
  const onLeaveCount = employees.filter((e) => e.status === 'On Leave').length;
  const newHires = employees.filter((e) => {
    const joined = new Date(e.joinDate);
    const now = new Date();
    return joined.getMonth() === now.getMonth() && joined.getFullYear() === now.getFullYear();
  }).length;

  const handleAdd = () => {
    if (!newEmp.name || !newEmp.role) return;
    setEmployees([
      ...employees,
      { ...newEmp, id: Date.now(), status: 'Active', joinDate: new Date().toISOString().split('T')[0] },
    ]);
    setNewEmp({ name: '', role: '', department: 'Front Desk', branch: 'Siyala Kandy', phone: '', email: '' });
    setIsModalOpen(false);
    setToastMessage('Employee added successfully!');
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-emerald-950">Employee Management</h2>
          <p className="text-sm text-stone-500 mt-1">Manage staff across all Siyala properties.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-emerald-950 px-4 py-2.5 rounded-xl font-semibold shadow-sm transition-colors text-sm">
          <Plus className="w-4 h-4" />
          Add Employee
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><Users className="w-5 h-5" /></div>
          <div><p className="text-xs text-stone-500 font-medium">Total Staff</p><p className="text-xl font-bold text-emerald-950">{employees.length}</p></div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><UserCheck className="w-5 h-5" /></div>
          <div><p className="text-xs text-stone-500 font-medium">Active Today</p><p className="text-xl font-bold text-emerald-700">{activeCount}</p></div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center"><UserX className="w-5 h-5" /></div>
          <div><p className="text-xs text-stone-500 font-medium">On Leave</p><p className="text-xl font-bold text-amber-700">{onLeaveCount}</p></div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><UserPlus className="w-5 h-5" /></div>
          <div><p className="text-xs text-stone-500 font-medium">New This Month</p><p className="text-xl font-bold text-blue-700">{newHires}</p></div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input type="text" placeholder="Search by name or role..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all" />
        </div>
        <select value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)} className="px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500">
          {departments.map((d) => <option key={d}>{d}</option>)}
        </select>
        <select value={branchFilter} onChange={(e) => setBranchFilter(e.target.value)} className="px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500">
          {branchOptions.map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>

      {/* Employee Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Department</th>
                <th className="p-4 font-medium">Branch</th>
                <th className="p-4 font-medium">Contact</th>
                <th className="p-4 font-medium">Joined</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map((emp) => (
                <tr key={emp.id} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                        {emp.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span className="text-sm font-semibold text-emerald-950">{emp.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-stone-600">{emp.role}</td>
                  <td className="p-4 text-sm">
                    <span className="px-2.5 py-1 bg-stone-100 text-stone-600 rounded-lg text-xs font-medium">{emp.department}</span>
                  </td>
                  <td className="p-4 text-sm font-medium text-amber-600">{emp.branch}</td>
                  <td className="p-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-stone-500 flex items-center gap-1"><Phone className="w-3 h-3" />{emp.phone}</span>
                      <span className="text-xs text-stone-500 flex items-center gap-1"><Mail className="w-3 h-3" />{emp.email}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-stone-500">{emp.joinDate}</td>
                  <td className="p-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${emp.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="p-8 text-center text-stone-400 text-sm">No employees found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Employee Modal */}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-stone-100">
                <h3 className="text-lg font-bold text-emerald-950">Add New Employee</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-xl hover:bg-stone-100 transition-colors"><X className="w-5 h-5 text-stone-500" /></button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Full Name</label>
                  <input type="text" value={newEmp.name} onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="e.g. Sanduni Rathnayake" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Role / Position</label>
                  <input type="text" value={newEmp.role} onChange={(e) => setNewEmp({ ...newEmp, role: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="e.g. Receptionist" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Department</label>
                    <select value={newEmp.department} onChange={(e) => setNewEmp({ ...newEmp, department: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                      {departments.filter(d => d !== 'All').map(d => <option key={d}>{d}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Branch</label>
                    <select value={newEmp.branch} onChange={(e) => setNewEmp({ ...newEmp, branch: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                      {branchOptions.filter(b => b !== 'All Branches').map(b => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Phone</label>
                    <input type="text" value={newEmp.phone} onChange={(e) => setNewEmp({ ...newEmp, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="+94 XX XXX XXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                    <input type="email" value={newEmp.email} onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="name@siyala.lk" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 p-6 border-t border-stone-100">
                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-stone-200 text-sm font-semibold text-stone-600 hover:bg-stone-50 transition-colors">Cancel</button>
                <button onClick={handleAdd} className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-emerald-950 text-sm font-semibold shadow-sm transition-colors">Add Employee</button>
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

export default EmployeeManagement;
