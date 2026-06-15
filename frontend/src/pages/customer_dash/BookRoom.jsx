import React, { useState } from 'react';
import {
  Search, MapPin, Star, Users, Wifi, Car, Coffee, Waves, BedDouble, ChevronDown, Calendar, Filter, Heart, ArrowRight,
} from 'lucide-react';

const rooms = [
  { id: 1, name: 'Deluxe Suite', hotel: 'Siyala Kandy', price: 15000, rating: 4.8, reviews: 124, guests: 2, image: '/kandy_hotel.png', amenities: ['wifi', 'parking', 'breakfast'], available: true },
  { id: 2, name: 'Ocean View Room', hotel: 'Siyala Galle Fort', price: 22000, rating: 4.9, reviews: 89, guests: 2, image: '/galle.png', amenities: ['wifi', 'pool', 'breakfast'], available: true },
  { id: 3, name: 'Mountain View', hotel: 'Siyala Ella', price: 12000, rating: 4.7, reviews: 156, guests: 2, image: '/ella.png', amenities: ['wifi', 'breakfast'], available: true },
  { id: 4, name: 'Beach Villa', hotel: 'Siyala Hikkaduwa', price: 18000, rating: 4.6, reviews: 78, guests: 4, image: '/hikkaduwa_hotel.png', amenities: ['wifi', 'pool', 'parking', 'breakfast'], available: false },
  { id: 5, name: 'Heritage Suite', hotel: 'Siyala Sigiriya', price: 20000, rating: 4.8, reviews: 95, guests: 2, image: '/sigiriya.png', amenities: ['wifi', 'parking', 'breakfast', 'pool'], available: true },
  { id: 6, name: 'Safari Lodge', hotel: 'Siyala Yala', price: 16000, rating: 4.5, reviews: 67, guests: 3, image: '/yala.png', amenities: ['wifi', 'parking'], available: true },
];

const amenityIcons = {
  wifi: { icon: Wifi, label: 'Wi-Fi' },
  parking: { icon: Car, label: 'Parking' },
  breakfast: { icon: Coffee, label: 'Breakfast' },
  pool: { icon: Waves, label: 'Pool' },
};

const BookRoom = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [priceSort, setPriceSort] = useState('default');
  const [favorites, setFavorites] = useState([]);

  const toggleFav = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const filteredRooms = rooms
    .filter(r => {
      const matchSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.hotel.toLowerCase().includes(searchTerm.toLowerCase());
      const matchLocation = locationFilter === 'All' || r.hotel.includes(locationFilter);
      return matchSearch && matchLocation;
    })
    .sort((a, b) => {
      if (priceSort === 'low') return a.price - b.price;
      if (priceSort === 'high') return b.price - a.price;
      return 0;
    });

  const locations = ['All', 'Kandy', 'Galle Fort', 'Ella', 'Hikkaduwa', 'Sigiriya', 'Yala'];

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-2">Find Your Perfect Stay</h2>
          <p className="text-emerald-200/50 text-sm mb-6">Browse our curated collection of rooms across Sri Lanka</p>
          
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search rooms or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all backdrop-blur-sm"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="date"
                className="pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all backdrop-blur-sm"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="date"
                className="pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2 text-sm font-medium text-stone-500">
          <Filter className="w-4 h-4" />
          Filters:
        </div>
        <div className="flex flex-wrap gap-2">
          {locations.map(loc => (
            <button
              key={loc}
              onClick={() => setLocationFilter(loc)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                locationFilter === loc
                  ? 'bg-emerald-950 text-amber-500 shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
              }`}
            >
              {loc === 'All' ? 'All Locations' : loc}
            </button>
          ))}
        </div>
        <div className="ml-auto relative">
          <select
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
            className="pl-3 pr-8 py-1.5 rounded-xl border border-stone-200 text-xs font-medium text-emerald-950 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 appearance-none cursor-pointer"
          >
            <option value="default">Sort by</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-400 pointer-events-none" />
        </div>
      </div>

      {/* Room Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map(room => (
          <div key={room.id} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden group hover:shadow-lg transition-all duration-300">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
              
              <button
                onClick={() => toggleFav(room.id)}
                className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all"
              >
                <Heart className={`w-4 h-4 ${favorites.includes(room.id) ? 'fill-red-500 text-red-500' : 'text-stone-400'}`} />
              </button>

              {!room.available && (
                <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                  Sold Out
                </div>
              )}

              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-sm font-medium">{room.hotel}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-emerald-950">{room.name}</h3>
                <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full shrink-0">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-amber-700">{room.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4 text-xs text-stone-500">
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> Up to {room.guests} guests</span>
                <span>{room.reviews} reviews</span>
              </div>

              {/* Amenities */}
              <div className="flex items-center gap-2 mb-4">
                {room.amenities.map(a => {
                  const AmenityIcon = amenityIcons[a]?.icon;
                  return AmenityIcon ? (
                    <div key={a} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-stone-50 text-stone-500 text-xs" title={amenityIcons[a].label}>
                      <AmenityIcon className="w-3 h-3" />
                      <span className="hidden sm:inline">{amenityIcons[a].label}</span>
                    </div>
                  ) : null;
                })}
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                <div>
                  <span className="text-xl font-bold text-emerald-950">LKR {room.price.toLocaleString()}</span>
                  <span className="text-xs text-stone-400 ml-1">/ night</span>
                </div>
                <button
                  disabled={!room.available}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    room.available
                      ? 'bg-amber-500 hover:bg-amber-400 text-emerald-950 shadow-sm hover:shadow-md hover:scale-105'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  <BedDouble className="w-4 h-4" />
                  {room.available ? 'Book Now' : 'Unavailable'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRooms.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-stone-100">
          <BedDouble className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <p className="text-stone-500 font-medium">No rooms found</p>
          <p className="text-stone-400 text-sm mt-1">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default BookRoom;
