import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  BedDouble,
  Users,
  Plus,
  X,
  Star,
  Phone,
  Mail,
  Search,
  MoreVertical,
  TrendingUp,
  Home,
} from 'lucide-react';

const initialProperties = [
  {
    id: 1,
    name: 'Siyala Kandy Heritage',
    location: 'Kandy, Sri Lanka',
    rooms: 45,
    occupancy: 82,
    staff: 28,
    rating: 4.8,
    status: 'Active',
    phone: '+94 81 234 5678',
    email: 'kandy@siyala.lk',
    type: 'Heritage Hotel',
  },
  {
    id: 2,
    name: 'Siyala Hikkaduwa Oceanfront',
    location: 'Hikkaduwa, Sri Lanka',
    rooms: 60,
    occupancy: 91,
    staff: 35,
    rating: 4.9,
    status: 'Active',
    phone: '+94 91 567 8901',
    email: 'hikkaduwa@siyala.lk',
    type: 'Beach Resort',
  },
  {
    id: 3,
    name: 'Siyala Colombo City',
    location: 'Colombo 03, Sri Lanka',
    rooms: 80,
    occupancy: 76,
    staff: 42,
    rating: 4.6,
    status: 'Active',
    phone: '+94 11 345 6789',
    email: 'colombo@siyala.lk',
    type: 'City Hotel',
  },
  {
    id: 4,
    name: 'Siyala Ella Retreat',
    location: 'Ella, Sri Lanka',
    rooms: 25,
    occupancy: 68,
    staff: 15,
    rating: 4.7,
    status: 'Renovating',
    phone: '+94 57 678 9012',
    email: 'ella@siyala.lk',
    type: 'Boutique Villa',
  },
];

const HotelManagement = () => {
  const [properties, setProperties] = useState(initialProperties);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [newProperty, setNewProperty] = useState({
    name: '',
    location: '',
    rooms: '',
    phone: '',
    email: '',
    type: 'Heritage Hotel',
  });

  const filtered = properties.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
  );

  const totalRooms = properties.reduce((s, p) => s + p.rooms, 0);
  const avgOccupancy = Math.round(properties.reduce((s, p) => s + p.occupancy, 0) / properties.length);
  const totalStaff = properties.reduce((s, p) => s + p.staff, 0);

  const handleAdd = () => {
    if (!newProperty.name || !newProperty.location) return;
    setProperties([
      ...properties,
      {
        ...newProperty,
        id: Date.now(),
        rooms: parseInt(newProperty.rooms) || 0,
        occupancy: 0,
        staff: 0,
        rating: 0,
        status: 'Active',
      },
    ]);
    setNewProperty({ name: '', location: '', rooms: '', phone: '', email: '', type: 'Heritage Hotel' });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-emerald-950">Hotel Management</h2>
          <p className="text-sm text-stone-500 mt-1">Manage all Siyala properties across Sri Lanka.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-emerald-950 px-4 py-2.5 rounded-xl font-semibold shadow-sm transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          Add Property
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <BedDouble className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-stone-500 font-medium">Total Rooms</p>
            <p className="text-2xl font-bold text-emerald-950">{totalRooms}</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-stone-500 font-medium">Avg. Occupancy</p>
            <p className="text-2xl font-bold text-emerald-950">{avgOccupancy}%</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-stone-500 font-medium">Total Staff</p>
            <p className="text-2xl font-bold text-emerald-950">{totalStaff}</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
        <input
          type="text"
          placeholder="Search properties..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
        />
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Card Header - Color strip */}
            <div className={`h-2 ${property.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-emerald-950">{property.name}</h3>
                  <div className="flex items-center gap-1 text-stone-500 text-sm mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {property.location}
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    property.status === 'Active'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {property.status}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-5">
                <span className="px-2.5 py-1 bg-stone-100 text-stone-600 rounded-lg text-xs font-medium">
                  {property.type}
                </span>
                <div className="flex items-center gap-1 text-amber-500 text-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span className="font-bold text-emerald-950">{property.rating}</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 py-4 border-t border-stone-100">
                <div className="text-center">
                  <p className="text-xl font-bold text-emerald-950">{property.rooms}</p>
                  <p className="text-xs text-stone-500 font-medium">Rooms</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-emerald-950">{property.occupancy}%</p>
                  <p className="text-xs text-stone-500 font-medium">Occupancy</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-emerald-950">{property.staff}</p>
                  <p className="text-xs text-stone-500 font-medium">Staff</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-stone-100 text-xs text-stone-500">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3" />
                  {property.phone}
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3" />
                  {property.email}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Property Modal */}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-stone-100">
                <h3 className="text-lg font-bold text-emerald-950">Add New Property</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-xl hover:bg-stone-100 transition-colors">
                  <X className="w-5 h-5 text-stone-500" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Property Name</label>
                  <input
                    type="text"
                    value={newProperty.name}
                    onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                    placeholder="e.g. Siyala Galle Fort"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Location</label>
                  <input
                    type="text"
                    value={newProperty.location}
                    onChange={(e) => setNewProperty({ ...newProperty, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                    placeholder="e.g. Galle, Sri Lanka"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Total Rooms</label>
                    <input
                      type="number"
                      value={newProperty.rooms}
                      onChange={(e) => setNewProperty({ ...newProperty, rooms: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Property Type</label>
                    <select
                      value={newProperty.type}
                      onChange={(e) => setNewProperty({ ...newProperty, type: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white"
                    >
                      <option>Heritage Hotel</option>
                      <option>Beach Resort</option>
                      <option>City Hotel</option>
                      <option>Boutique Villa</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Phone</label>
                    <input
                      type="text"
                      value={newProperty.phone}
                      onChange={(e) => setNewProperty({ ...newProperty, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                      placeholder="+94 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={newProperty.email}
                      onChange={(e) => setNewProperty({ ...newProperty, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                      placeholder="branch@siyala.lk"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 p-6 border-t border-stone-100">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-stone-200 text-sm font-semibold text-stone-600 hover:bg-stone-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAdd}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-emerald-950 text-sm font-semibold shadow-sm transition-colors"
                >
                  Add Property
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HotelManagement;
