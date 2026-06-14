import React, { useState } from 'react';
import { Package, Search, AlertTriangle, Plus, Edit2, Trash2, TrendingDown } from 'lucide-react';

const initialInventory = [
  { id: 1, name: 'Premium Bath Towels', category: 'Linen', stock: 320, minStock: 100, unit: 'pcs', supplier: 'Lanka Textiles', lastUpdated: '2026-06-12', location: 'Both' },
  { id: 2, name: 'Jasmine Shampoo (200ml)', category: 'Toiletries', stock: 48, minStock: 80, unit: 'bottles', supplier: 'Ceylon Beauty', lastUpdated: '2026-06-13', location: 'Kandy' },
  { id: 3, name: 'Basmati Rice (25kg bag)', category: 'Food & Beverage', stock: 15, minStock: 10, unit: 'bags', supplier: 'Agri Lanka', lastUpdated: '2026-06-11', location: 'Hikkaduwa' },
  { id: 4, name: 'Air Freshener (300ml)', category: 'Housekeeping', stock: 75, minStock: 50, unit: 'cans', supplier: 'Clean Pro', lastUpdated: '2026-06-14', location: 'Both' },
  { id: 5, name: 'King Bed Sheets (Set)', category: 'Linen', stock: 90, minStock: 40, unit: 'sets', supplier: 'Lanka Textiles', lastUpdated: '2026-06-10', location: 'Kandy' },
  { id: 6, name: 'Coconut Oil (1L)', category: 'Food & Beverage', stock: 22, minStock: 15, unit: 'bottles', supplier: 'Ceylon Coconut Co.', lastUpdated: '2026-06-13', location: 'Both' },
  { id: 7, name: 'Minibar Snacks (Mixed)', category: 'Food & Beverage', stock: 8, minStock: 30, unit: 'boxes', supplier: 'Delifresh', lastUpdated: '2026-06-12', location: 'Hikkaduwa' },
  { id: 8, name: 'Pool Chlorine Tablets', category: 'Maintenance', stock: 60, minStock: 20, unit: 'kg', supplier: 'ChemPro SL', lastUpdated: '2026-06-09', location: 'Both' },
];

const CATEGORIES = ['All', 'Linen', 'Toiletries', 'Food & Beverage', 'Housekeeping', 'Maintenance'];

const CategoryBadge = ({ category }) => {
  const colors = {
    'Linen': 'bg-blue-50 text-blue-700 border-blue-200',
    'Toiletries': 'bg-purple-50 text-purple-700 border-purple-200',
    'Food & Beverage': 'bg-amber-50 text-amber-700 border-amber-200',
    'Housekeeping': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Maintenance': 'bg-stone-100 text-stone-600 border-stone-200',
  };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${colors[category] || 'bg-stone-100 text-stone-500'}`}>
      {category}
    </span>
  );
};

const StockBar = ({ stock, minStock }) => {
  const pct = Math.min((stock / (minStock * 3)) * 100, 100);
  const color = stock < minStock ? 'bg-red-500' : stock < minStock * 1.5 ? 'bg-amber-500' : 'bg-emerald-500';
  return (
    <div className="flex items-center gap-2 min-w-[100px]">
      <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs font-bold text-stone-600">{stock}</span>
    </div>
  );
};

const InventoryManagement = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const lowStock = inventory.filter(i => i.stock < i.minStock);

  const filtered = inventory.filter(i => {
    const matchSearch = i.name.toLowerCase().includes(search.toLowerCase()) || i.supplier.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'All' || i.category === category;
    return matchSearch && matchCat;
  });

  const handleDelete = (id) => setInventory(prev => prev.filter(i => i.id !== id));

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-emerald-950">Inventory Management</h1>
          <p className="text-stone-400 text-sm mt-1">Track supplies and manage stock levels across all properties.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-950 text-amber-400 font-bold text-sm rounded-xl hover:bg-emerald-800 transition-all shadow-lg">
          <Plus className="w-4 h-4" /> Add Item
        </button>
      </div>

      {/* Low Stock Alert */}
      {lowStock.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h3 className="font-bold text-red-700">Low Stock Alert — {lowStock.length} item{lowStock.length > 1 ? 's' : ''} need restocking</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {lowStock.map(i => (
              <span key={i.id} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-100 text-red-700 text-xs font-semibold rounded-full border border-red-200">
                <TrendingDown className="w-3 h-3" /> {i.name} ({i.stock} {i.unit} left)
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Items', value: inventory.length, color: 'bg-emerald-600' },
          { label: 'Low Stock', value: lowStock.length, color: 'bg-red-500' },
          { label: 'Categories', value: CATEGORIES.length - 1, color: 'bg-blue-500' },
          { label: 'Suppliers', value: [...new Set(inventory.map(i => i.supplier))].length, color: 'bg-amber-500' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm">
            <p className="text-3xl font-bold text-emerald-950 mb-1">{s.value}</p>
            <p className="text-sm text-stone-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search items or suppliers..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${category === c ? 'bg-emerald-950 text-amber-400 border-emerald-950' : 'bg-white text-stone-500 border-stone-200 hover:border-amber-400'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-stone-50 border-b border-stone-100">
              <tr>
                {['Item Name', 'Category', 'Stock', 'Min. Stock', 'Unit', 'Supplier', 'Location', 'Last Updated', 'Actions'].map(h => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-bold text-stone-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={9} className="text-center py-12 text-stone-400">No items found.</td></tr>
              ) : filtered.map(item => (
                <tr key={item.id} className={`hover:bg-stone-50 transition-colors ${item.stock < item.minStock ? 'bg-red-50/50' : ''}`}>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      {item.stock < item.minStock && <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" />}
                      <span className="font-semibold text-emerald-950">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4"><CategoryBadge category={item.category} /></td>
                  <td className="px-5 py-4"><StockBar stock={item.stock} minStock={item.minStock} /></td>
                  <td className="px-5 py-4 text-stone-400">{item.minStock}</td>
                  <td className="px-5 py-4 text-stone-400">{item.unit}</td>
                  <td className="px-5 py-4 text-stone-500">{item.supplier}</td>
                  <td className="px-5 py-4 text-stone-400">{item.location}</td>
                  <td className="px-5 py-4 text-stone-400 whitespace-nowrap">{item.lastUpdated}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-lg text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleDelete(item.id)} className="p-1.5 rounded-lg text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
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

export default InventoryManagement;
