import React, { useState } from 'react';
import {
  Package,
  Plus,
  X,
  Search,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

const categories = ['All', 'Kitchen', 'Housekeeping', 'Maintenance', 'Amenities'];

const initialItems = [
  { id: 1, name: 'Bath Towels', category: 'Housekeeping', quantity: 120, minStock: 50, supplier: 'Lanka Textiles', lastRestocked: '2026-06-10', branch: 'All Branches' },
  { id: 2, name: 'Basmati Rice (25kg)', category: 'Kitchen', quantity: 8, minStock: 10, supplier: 'Cargills Foods', lastRestocked: '2026-06-12', branch: 'Siyala Kandy' },
  { id: 3, name: 'Light Bulbs (LED)', category: 'Maintenance', quantity: 200, minStock: 50, supplier: 'Philips Lanka', lastRestocked: '2026-06-08', branch: 'All Branches' },
  { id: 4, name: 'Shampoo Sachets', category: 'Amenities', quantity: 5, minStock: 100, supplier: 'Hemas Consumer', lastRestocked: '2026-06-01', branch: 'Siyala Hikkaduwa' },
  { id: 5, name: 'Olive Oil (5L)', category: 'Kitchen', quantity: 15, minStock: 8, supplier: 'Keells Food', lastRestocked: '2026-06-11', branch: 'Siyala Colombo' },
  { id: 6, name: 'Bed Sheets (King)', category: 'Housekeeping', quantity: 3, minStock: 20, supplier: 'Lanka Textiles', lastRestocked: '2026-05-28', branch: 'Siyala Ella' },
  { id: 7, name: 'Toilet Paper (Bulk)', category: 'Housekeeping', quantity: 300, minStock: 100, supplier: 'Softlogic', lastRestocked: '2026-06-14', branch: 'All Branches' },
  { id: 8, name: 'AC Filters', category: 'Maintenance', quantity: 0, minStock: 15, supplier: 'Daikin Lanka', lastRestocked: '2026-05-20', branch: 'Siyala Kandy' },
  { id: 9, name: 'Fresh Chicken (kg)', category: 'Kitchen', quantity: 45, minStock: 20, supplier: 'Bairaha Farms', lastRestocked: '2026-06-15', branch: 'Siyala Hikkaduwa' },
  { id: 10, name: 'Mini Soap Bars', category: 'Amenities', quantity: 450, minStock: 200, supplier: 'Hemas Consumer', lastRestocked: '2026-06-13', branch: 'All Branches' },
];

const InventoryManagement = () => {
  const [items, setItems] = useState(initialItems);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    category: 'Kitchen',
    quantity: '',
    minStock: '',
    supplier: '',
    branch: 'All Branches',
  });

  const getStatus = (item) => {
    if (item.quantity === 0) return 'Out of Stock';
    if (item.quantity < item.minStock) return 'Low Stock';
    return 'In Stock';
  };

  const filtered = items.filter((item) => {
    const matchCat = activeCategory === 'All' || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.supplier.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const lowStockCount = items.filter((i) => i.quantity < i.minStock && i.quantity > 0).length;
  const outOfStockCount = items.filter((i) => i.quantity === 0).length;

  const handleAdd = () => {
    if (!newItem.name) return;
    setItems([
      ...items,
      {
        ...newItem,
        id: Date.now(),
        quantity: parseInt(newItem.quantity) || 0,
        minStock: parseInt(newItem.minStock) || 0,
        lastRestocked: new Date().toISOString().split('T')[0],
      },
    ]);
    setNewItem({ name: '', category: 'Kitchen', quantity: '', minStock: '', supplier: '', branch: 'All Branches' });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-emerald-950">Inventory Management</h2>
          <p className="text-sm text-stone-500 mt-1">Track supplies and stock levels across all properties.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-emerald-950 px-4 py-2.5 rounded-xl font-semibold shadow-sm transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          Add Item
        </button>
      </div>

      {/* Alert Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-stone-500 font-medium">Total Items</p>
            <p className="text-xl font-bold text-emerald-950">{items.length}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-amber-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-stone-500 font-medium">Low Stock</p>
            <p className="text-xl font-bold text-amber-700">{lowStockCount}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-red-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <XCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-stone-500 font-medium">Out of Stock</p>
            <p className="text-xl font-bold text-red-700">{outOfStockCount}</p>
          </div>
        </div>
      </div>

      {/* Category Tabs + Search */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-emerald-950 shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
          />
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Item</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Branch</th>
                <th className="p-4 font-medium">Qty</th>
                <th className="p-4 font-medium">Min Stock</th>
                <th className="p-4 font-medium">Supplier</th>
                <th className="p-4 font-medium">Last Restocked</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map((item) => {
                const status = getStatus(item);
                return (
                  <tr key={item.id} className={`hover:bg-stone-50/50 transition-colors ${status === 'Out of Stock' ? 'bg-red-50/30' : status === 'Low Stock' ? 'bg-amber-50/30' : ''}`}>
                    <td className="p-4 text-sm font-semibold text-emerald-950">{item.name}</td>
                    <td className="p-4 text-sm">
                      <span className="px-2.5 py-1 bg-stone-100 text-stone-600 rounded-lg text-xs font-medium">{item.category}</span>
                    </td>
                    <td className="p-4 text-sm text-stone-600">{item.branch}</td>
                    <td className="p-4 text-sm font-bold text-emerald-950">{item.quantity}</td>
                    <td className="p-4 text-sm text-stone-500">{item.minStock}</td>
                    <td className="p-4 text-sm text-stone-600">{item.supplier}</td>
                    <td className="p-4 text-sm text-stone-500">{item.lastRestocked}</td>
                    <td className="p-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          status === 'In Stock'
                            ? 'bg-emerald-100 text-emerald-700'
                            : status === 'Low Stock'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Item Modal */}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-stone-100">
                <h3 className="text-lg font-bold text-emerald-950">Add Inventory Item</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-xl hover:bg-stone-100 transition-colors">
                  <X className="w-5 h-5 text-stone-500" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Item Name</label>
                  <input type="text" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="e.g. Fresh Milk (1L)" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Category</label>
                    <select value={newItem.category} onChange={(e) => setNewItem({ ...newItem, category: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                      <option>Kitchen</option>
                      <option>Housekeeping</option>
                      <option>Maintenance</option>
                      <option>Amenities</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Branch</label>
                    <select value={newItem.branch} onChange={(e) => setNewItem({ ...newItem, branch: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                      <option>All Branches</option>
                      <option>Siyala Kandy</option>
                      <option>Siyala Hikkaduwa</option>
                      <option>Siyala Colombo</option>
                      <option>Siyala Ella</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Quantity</label>
                    <input type="number" value={newItem.quantity} onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="0" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Min Stock Level</label>
                    <input type="number" value={newItem.minStock} onChange={(e) => setNewItem({ ...newItem, minStock: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="0" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Supplier</label>
                  <input type="text" value={newItem.supplier} onChange={(e) => setNewItem({ ...newItem, supplier: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="e.g. Lanka Distributors" />
                </div>
              </div>
              <div className="flex justify-end gap-3 p-6 border-t border-stone-100">
                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-stone-200 text-sm font-semibold text-stone-600 hover:bg-stone-50 transition-colors">Cancel</button>
                <button onClick={handleAdd} className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-emerald-950 text-sm font-semibold shadow-sm transition-colors">Add Item</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InventoryManagement;
