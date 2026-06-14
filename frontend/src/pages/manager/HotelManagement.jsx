import React, { useState } from 'react';
import { Building2, MapPin, BedDouble, Plus, Edit2, Trash2, X, Check, Star } from 'lucide-react';

const initialHotels = [
  {
    id: 1,
    name: 'Kandy Heritage Resort',
    location: 'Kandy, Central Province',
    image: '/kandy_hotel.png',
    tag: 'Cultural Capital',
    rating: 4.9,
    rooms: 48,
    occupancy: 78,
    roomTypes: [
      { type: 'Standard Room', count: 20, price: 'LKR 15,000' },
      { type: 'Deluxe Suite', count: 16, price: 'LKR 28,000' },
      { type: 'Heritage Loft', count: 8, price: 'LKR 45,000' },
      { type: 'Royal Villa', count: 4, price: 'LKR 85,000' },
    ],
  },
  {
    id: 2,
    name: 'Hikkaduwa Oceanfront',
    location: 'Hikkaduwa, Southern Province',
    image: '/hikkaduwa_hotel.png',
    tag: 'Coastal Paradise',
    rating: 4.8,
    rooms: 36,
    occupancy: 91,
    roomTypes: [
      { type: 'Beach Cabana', count: 12, price: 'LKR 22,000' },
      { type: 'Ocean View Suite', count: 14, price: 'LKR 35,000' },
      { type: 'Penthouse', count: 6, price: 'LKR 65,000' },
      { type: 'Family Unit', count: 4, price: 'LKR 40,000' },
    ],
  },
];

const OccupancyBar = ({ value }) => (
  <div>
    <div className="flex justify-between text-xs mb-1">
      <span className="text-stone-400 font-medium">Occupancy</span>
      <span className="font-bold text-emerald-700">{value}%</span>
    </div>
    <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-700 ${value >= 80 ? 'bg-emerald-500' : value >= 50 ? 'bg-amber-500' : 'bg-red-400'}`}
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const HotelManagement = () => {
  const [hotels, setHotels] = useState(initialHotels);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isAddingRoom, setIsAddingRoom] = useState(false);
  const [newRoom, setNewRoom] = useState({ type: '', count: '', price: '' });

  const handleAddRoom = (hotelId) => {
    if (!newRoom.type || !newRoom.count || !newRoom.price) return;
    setHotels(prev => prev.map(h =>
      h.id === hotelId
        ? { ...h, roomTypes: [...h.roomTypes, { ...newRoom }], rooms: h.rooms + Number(newRoom.count) }
        : h
    ));
    setNewRoom({ type: '', count: '', price: '' });
    setIsAddingRoom(false);
  };

  const handleDeleteRoom = (hotelId, roomType) => {
    setHotels(prev => prev.map(h =>
      h.id === hotelId
        ? { ...h, roomTypes: h.roomTypes.filter(r => r.type !== roomType) }
        : h
    ));
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-emerald-950">Hotel Management</h1>
          <p className="text-stone-400 text-sm mt-1">Manage your property portfolio, locations, and room types.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-950 text-amber-400 font-bold text-sm rounded-xl hover:bg-emerald-800 transition-all shadow-lg">
          <Plus className="w-4 h-4" /> Add Property
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
              <div className="absolute top-4 left-4 bg-amber-500 text-emerald-950 text-xs font-bold px-3 py-1 rounded-full">{hotel.tag}</div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-serif font-bold text-xl mb-1">{hotel.name}</h3>
                <div className="flex items-center gap-2 text-emerald-100/80 text-xs">
                  <MapPin className="w-3 h-3" /> {hotel.location}
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-white font-bold text-sm">{hotel.rating}</span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <OccupancyBar value={hotel.occupancy} />

              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2 text-stone-500">
                  <BedDouble className="w-4 h-4 text-amber-500" />
                  <span className="font-medium">{hotel.rooms} Total Rooms</span>
                </div>
                <button
                  onClick={() => setSelectedHotel(selectedHotel?.id === hotel.id ? null : hotel)}
                  className="text-emerald-700 font-bold text-xs uppercase tracking-wide hover:text-amber-600 transition-colors"
                >
                  {selectedHotel?.id === hotel.id ? 'Hide Rooms ↑' : 'Manage Rooms →'}
                </button>
              </div>

              {/* Room Types Panel */}
              {selectedHotel?.id === hotel.id && (
                <div className="border-t border-stone-100 pt-4 space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-1.5">
                      <BedDouble className="w-4 h-4 text-amber-500" /> Room Types
                    </h4>
                    <button
                      onClick={() => setIsAddingRoom(!isAddingRoom)}
                      className="flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Type
                    </button>
                  </div>

                  {hotel.roomTypes.map((room) => (
                    <div key={room.type} className="flex items-center justify-between px-4 py-3 bg-stone-50 rounded-xl border border-stone-100">
                      <div>
                        <p className="font-semibold text-emerald-950 text-sm">{room.type}</p>
                        <p className="text-xs text-stone-400">{room.count} rooms · {room.price}/night</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 rounded-lg text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteRoom(hotel.id, room.type)}
                          className="p-1.5 rounded-lg text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {isAddingRoom && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3">
                      <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">New Room Type</p>
                      <input
                        placeholder="Room Type (e.g. Presidential Suite)"
                        value={newRoom.type}
                        onChange={e => setNewRoom(p => ({ ...p, type: e.target.value }))}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          placeholder="Count"
                          type="number"
                          value={newRoom.count}
                          onChange={e => setNewRoom(p => ({ ...p, count: e.target.value }))}
                          className="px-3 py-2 text-sm rounded-lg border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        <input
                          placeholder="Price (LKR)"
                          value={newRoom.price}
                          onChange={e => setNewRoom(p => ({ ...p, price: e.target.value }))}
                          className="px-3 py-2 text-sm rounded-lg border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleAddRoom(hotel.id)} className="flex items-center gap-1 px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition-colors">
                          <Check className="w-3.5 h-3.5" /> Save
                        </button>
                        <button onClick={() => setIsAddingRoom(false)} className="flex items-center gap-1 px-4 py-2 bg-stone-100 text-stone-600 text-xs font-bold rounded-lg hover:bg-stone-200 transition-colors">
                          <X className="w-3.5 h-3.5" /> Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelManagement;
