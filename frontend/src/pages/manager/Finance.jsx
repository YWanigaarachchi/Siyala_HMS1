import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, CreditCard, ArrowUpRight, ArrowDownRight, Download } from 'lucide-react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const revenueData = [3200000, 2900000, 3800000, 4100000, 3600000, 4200000];
const expenseData = [1800000, 1700000, 2100000, 2200000, 1900000, 2300000];

const transactions = [
  { id: 'TXN-9041', type: 'Income', desc: 'Room Revenue - Kandy (Jun W2)', amount: 1420000, date: '2026-06-14', category: 'Room Revenue' },
  { id: 'TXN-9040', type: 'Income', desc: 'F&B Revenue - Hikkaduwa', amount: 380000, date: '2026-06-14', category: 'F&B' },
  { id: 'TXN-9039', type: 'Expense', desc: 'Staff Salaries - June', amount: -1200000, date: '2026-06-13', category: 'Payroll' },
  { id: 'TXN-9038', type: 'Income', desc: 'Spa & Wellness Revenue', amount: 195000, date: '2026-06-13', category: 'Wellness' },
  { id: 'TXN-9037', type: 'Expense', desc: 'Inventory Restock - Supplies', amount: -320000, date: '2026-06-12', category: 'Inventory' },
  { id: 'TXN-9036', type: 'Expense', desc: 'Utilities - Kandy & Hikkaduwa', amount: -180000, date: '2026-06-11', category: 'Utilities' },
  { id: 'TXN-9035', type: 'Income', desc: 'Events & Banquets Revenue', amount: 480000, date: '2026-06-10', category: 'Events' },
  { id: 'TXN-9034', type: 'Expense', desc: 'Marketing & Promotions', amount: -95000, date: '2026-06-09', category: 'Marketing' },
];

const maxVal = Math.max(...revenueData);

const BarPair = ({ rev, exp, label }) => (
  <div className="flex flex-col items-center gap-1 flex-1">
    <div className="flex items-end gap-1 h-32 w-full">
      <div className="flex-1 bg-emerald-500 rounded-t-md hover:bg-emerald-400 transition-colors cursor-pointer relative group"
        style={{ height: `${(rev / maxVal) * 100}%` }}>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-950 text-white text-[10px] font-bold px-2 py-1 rounded hidden group-hover:block whitespace-nowrap z-10">
          LKR {(rev / 1000000).toFixed(1)}M
        </div>
      </div>
      <div className="flex-1 bg-red-400 rounded-t-md hover:bg-red-300 transition-colors cursor-pointer relative group"
        style={{ height: `${(exp / maxVal) * 100}%` }}>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-950 text-white text-[10px] font-bold px-2 py-1 rounded hidden group-hover:block whitespace-nowrap z-10">
          LKR {(exp / 1000000).toFixed(1)}M
        </div>
      </div>
    </div>
    <span className="text-xs text-stone-400 font-medium">{label}</span>
  </div>
);

const Finance = () => {
  const [period, setPeriod] = useState('This Month');
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      const blob = new Blob(['Mock Finance Report Data'], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Siyala_Finance_Report_H1.csv';
      a.click();
      window.URL.revokeObjectURL(url);
      setIsExporting(false);
    }, 1500);
  };

  const totalRevenue = revenueData.reduce((a, b) => a + b, 0);
  const totalExpenses = expenseData.reduce((a, b) => a + b, 0);
  const netProfit = totalRevenue - totalExpenses;
  const profitMargin = ((netProfit / totalRevenue) * 100).toFixed(1);

  const summaryCards = [
    { label: 'Total Revenue (H1)', value: `LKR ${(totalRevenue / 1000000).toFixed(1)}M`, change: '+18%', positive: true, icon: TrendingUp, color: 'bg-emerald-600' },
    { label: 'Total Expenses (H1)', value: `LKR ${(totalExpenses / 1000000).toFixed(1)}M`, change: '+5%', positive: false, icon: TrendingDown, color: 'bg-red-500' },
    { label: 'Net Profit (H1)', value: `LKR ${(netProfit / 1000000).toFixed(1)}M`, change: '+22%', positive: true, icon: DollarSign, color: 'bg-blue-500' },
    { label: 'Profit Margin', value: `${profitMargin}%`, change: '+3.2%', positive: true, icon: CreditCard, color: 'bg-amber-500' },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-emerald-950">Finance</h1>
          <p className="text-stone-400 text-sm mt-1">Financial overview, revenue tracking, and expense management.</p>
        </div>
        <button 
          onClick={handleExport}
          disabled={isExporting}
          className="flex items-center gap-2 px-5 py-2.5 bg-emerald-950 text-amber-400 font-bold text-sm rounded-xl hover:bg-emerald-800 transition-all shadow-lg disabled:opacity-70"
        >
          {isExporting ? (
            <><div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" /> Exporting...</>
          ) : (
            <><Download className="w-4 h-4" /> Export Report</>
          )}
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card) => (
          <div key={card.label} className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${card.color}`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${card.positive ? 'text-emerald-700 bg-emerald-50' : 'text-red-600 bg-red-50'}`}>
                {card.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {card.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-emerald-950 mb-1">{card.value}</p>
            <p className="text-xs text-stone-400 font-medium">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Revenue vs Expense Bar Chart */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-emerald-950">Revenue vs Expenses (H1 2026)</h2>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" /> Revenue</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-400 inline-block" /> Expenses</span>
          </div>
        </div>
        <div className="flex items-end gap-2">
          {months.map((m, i) => (
            <BarPair key={m} label={m} rev={revenueData[i]} exp={expenseData[i]} />
          ))}
        </div>
      </div>

      {/* Revenue Breakdown + Transaction History */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">

        {/* Revenue Breakdown */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
          <h2 className="font-bold text-emerald-950 mb-4">Revenue by Category</h2>
          <div className="space-y-4">
            {[
              { label: 'Room Revenue', pct: 65, amount: 'LKR 4.9M', color: 'bg-emerald-500' },
              { label: 'F&B', pct: 20, amount: 'LKR 1.5M', color: 'bg-amber-500' },
              { label: 'Wellness & Spa', pct: 10, amount: 'LKR 760K', color: 'bg-blue-500' },
              { label: 'Events', pct: 5, amount: 'LKR 380K', color: 'bg-purple-500' },
            ].map(item => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-emerald-950">{item.label}</span>
                  <span className="text-stone-400 font-semibold">{item.amount} <span className="text-xs">({item.pct}%)</span></span>
                </div>
                <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <div className="xl:col-span-3 bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
            <h2 className="font-bold text-emerald-950">Recent Transactions</h2>
          </div>
          <div className="divide-y divide-stone-50 max-h-[320px] overflow-y-auto no-scrollbar">
            {transactions.map(t => (
              <div key={t.id} className="flex items-center justify-between px-6 py-4 hover:bg-stone-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center ${t.type === 'Income' ? 'bg-emerald-50' : 'bg-red-50'}`}>
                    {t.type === 'Income' ? <ArrowUpRight className="w-4 h-4 text-emerald-600" /> : <ArrowDownRight className="w-4 h-4 text-red-500" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-950">{t.desc}</p>
                    <p className="text-xs text-stone-400">{t.date} · {t.category}</p>
                  </div>
                </div>
                <span className={`font-bold text-sm ${t.type === 'Income' ? 'text-emerald-600' : 'text-red-500'}`}>
                  {t.type === 'Income' ? '+' : ''}LKR {Math.abs(t.amount).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
