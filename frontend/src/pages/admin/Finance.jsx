import React from 'react';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  AreaChart,
  Area,
} from 'recharts';

const monthlyData = [
  { month: 'Jan', revenue: 3200000, expenses: 2100000 },
  { month: 'Feb', revenue: 2800000, expenses: 1900000 },
  { month: 'Mar', revenue: 4100000, expenses: 2400000 },
  { month: 'Apr', revenue: 3900000, expenses: 2200000 },
  { month: 'May', revenue: 5200000, expenses: 2800000 },
  { month: 'Jun', revenue: 4800000, expenses: 2600000 },
];

const branchRevenue = [
  { branch: 'Kandy', revenue: 8500000 },
  { branch: 'Hikkaduwa', revenue: 12200000 },
  { branch: 'Colombo', revenue: 9800000 },
  { branch: 'Ella', revenue: 3500000 },
];

const transactions = [
  { id: 'TXN-001', date: '2026-06-15', description: 'Room Revenue — Deluxe Suite', category: 'Room Sales', amount: 45000, type: 'Income' },
  { id: 'TXN-002', date: '2026-06-15', description: 'Kitchen Supplies — Cargills', category: 'Procurement', amount: 128000, type: 'Expense' },
  { id: 'TXN-003', date: '2026-06-14', description: 'Spa Package — Couple Retreat', category: 'Services', amount: 22000, type: 'Income' },
  { id: 'TXN-004', date: '2026-06-14', description: 'Staff Salaries — June', category: 'Payroll', amount: 1850000, type: 'Expense' },
  { id: 'TXN-005', date: '2026-06-13', description: 'Conference Hall Booking', category: 'Events', amount: 75000, type: 'Income' },
  { id: 'TXN-006', date: '2026-06-13', description: 'Electricity Bill — All Branches', category: 'Utilities', amount: 420000, type: 'Expense' },
  { id: 'TXN-007', date: '2026-06-12', description: 'Restaurant Revenue — Dinner', category: 'F&B', amount: 185000, type: 'Income' },
  { id: 'TXN-008', date: '2026-06-12', description: 'Linen Replacement — Housekeeping', category: 'Procurement', amount: 95000, type: 'Expense' },
];

const formatCurrency = (v) => `LKR ${(v / 1000000).toFixed(1)}M`;
const formatSmall = (v) => `LKR ${v.toLocaleString()}`;

const Finance = () => {
  const totalRevenue = monthlyData.reduce((s, m) => s + m.revenue, 0);
  const totalExpenses = monthlyData.reduce((s, m) => s + m.expenses, 0);
  const netProfit = totalRevenue - totalExpenses;
  const pendingPayments = 1250000;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-emerald-950">Finance</h2>
        <p className="text-sm text-stone-500 mt-1">Financial overview across all Siyala properties.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><DollarSign className="w-5 h-5" /></div>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"><ArrowUpRight className="w-3 h-3 mr-1" />14.2%</span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Total Revenue</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">{formatCurrency(totalRevenue)}</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center"><TrendingDown className="w-5 h-5" /></div>
            <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full"><ArrowUpRight className="w-3 h-3 mr-1" />6.8%</span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Total Expenses</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">{formatCurrency(totalExpenses)}</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><TrendingUp className="w-5 h-5" /></div>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"><ArrowUpRight className="w-3 h-3 mr-1" />22.1%</span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Net Profit</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">{formatCurrency(netProfit)}</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center"><CreditCard className="w-5 h-5" /></div>
            <span className="flex items-center text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full"><ArrowDownRight className="w-3 h-3 mr-1" />3 Due</span>
          </div>
          <h3 className="text-stone-500 text-sm font-medium">Pending Payments</h3>
          <p className="text-2xl font-bold text-emerald-950 mt-1">{formatCurrency(pendingPayments)}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue vs Expenses */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
          <h3 className="text-lg font-bold text-emerald-950 mb-6">Revenue vs Expenses</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} dx={-10} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} formatter={(v) => formatSmall(v)} />
                <Legend />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="#10b981" fillOpacity={0.15} strokeWidth={2} name="Revenue" />
                <Area type="monotone" dataKey="expenses" stroke="#ef4444" fill="#ef4444" fillOpacity={0.1} strokeWidth={2} name="Expenses" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Branch Revenue */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
          <h3 className="text-lg font-bold text-emerald-950 mb-6">Revenue by Branch</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={branchRevenue} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f5f5f4" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`} />
                <YAxis type="category" dataKey="branch" axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 12 }} width={80} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} formatter={(v) => formatSmall(v)} />
                <Bar dataKey="revenue" fill="#f59e0b" radius={[0, 4, 4, 0]} name="Revenue" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-6 border-b border-stone-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-emerald-950">Recent Transactions</h3>
          <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">Export CSV</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Description</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-4 text-sm font-semibold text-emerald-950">{t.id}</td>
                  <td className="p-4 text-sm text-stone-500">{t.date}</td>
                  <td className="p-4 text-sm text-stone-700">{t.description}</td>
                  <td className="p-4 text-sm"><span className="px-2.5 py-1 bg-stone-100 text-stone-600 rounded-lg text-xs font-medium">{t.category}</span></td>
                  <td className="p-4 text-sm font-medium text-emerald-950">{formatSmall(t.amount)}</td>
                  <td className="p-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${t.type === 'Income' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                      {t.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Finance;
