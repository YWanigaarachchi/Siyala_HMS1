import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Compass, Clock, ArrowRight, Star, Car } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Sigiriya Rock Fortress',
    category: 'Culture',
    image: '/sigiriya.png',
    hotelNear: 'Kandy Heritage',
    duration: '2.5 hrs away',
    rating: '4.9',
    description: 'An ancient rock fortress and palace ruin of unmatched historical significance. Marvel at the stunning mirror wall frescoes and rise to the summit via the massive Lion Paw gate.'
  },
  {
    id: 2,
    title: 'Demodara Nine Arch Bridge',
    category: 'Highlands',
    image: '/ella.png',
    hotelNear: 'Kandy Heritage',
    duration: '3.0 hrs away',
    rating: '4.8',
    description: 'A masterpiece of colonial-era engineering located in the misty valley of Ella. Watch the legendary blue train glide across the bridge amidst rolling tea plantations.'
  },
  {
    id: 3,
    title: 'Yala National Park',
    category: 'Wildlife',
    image: '/yala.png',
    hotelNear: 'Hikkaduwa Oceanfront',
    duration: '3.5 hrs away',
    rating: '4.9',
    description: 'Sri Lanka’s premier wildlife sanctuary, boasting the highest concentration of leopards in the world, alongside majestic elephants and exotic bird species.'
  },
  {
    id: 4,
    title: 'Galle Dutch Fort',
    category: 'Coastal',
    image: '/galle.png',
    hotelNear: 'Hikkaduwa Oceanfront',
    duration: '45 mins away',
    rating: '4.8',
    description: 'A UNESCO World Heritage site displaying the perfect union of European colonial architecture and South Asian traditions. Walk the ramparts and see the historic lighthouse.'
  }
];

const Travel = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Culture', 'Highlands', 'Wildlife', 'Coastal'];

  const filteredDestinations = activeFilter === 'All' 
    ? destinations 
    : destinations.filter(d => d.category === activeFilter);

  return (
    <div className="bg-stone-50 min-h-screen text-slate-800 selection:bg-amber-600 selection:text-white">
      {/* ======================================= */}
      {/* HERO SECTION                            */}
      {/* ======================================= */}
      <section className="relative bg-emerald-950 pt-32 pb-24 px-8 overflow-hidden text-center text-white">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/4"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 font-bold tracking-widest text-xs uppercase mb-6 shadow-sm">
            <Compass className="w-4 h-4 animate-spin-slow" />
            Curated Experiences
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">
            Explore <span className="font-semibold text-amber-500">Sri Lanka</span>
          </h1>
          <p className="text-emerald-100/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Discover breathtaking historic landmarks, wildlife parks, and coastal cities. All carefully organized excursions starting from Siyala hotel branches.
          </p>
        </div>
      </section>

      {/* ======================================= */}
      {/* CATEGORY FILTER BAR                     */}
      {/* ======================================= */}
      <section className="sticky top-20 z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200 py-6 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-emerald-950 font-bold text-lg tracking-wide">Filter by Experience</span>
          <div className="flex gap-2 overflow-x-auto max-w-full pb-1 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all ${
                  activeFilter === category
                    ? 'bg-amber-500 text-emerald-950 shadow-md font-semibold'
                    : 'bg-white text-slate-600 hover:bg-stone-100 hover:text-emerald-950 border border-stone-200 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* DESTINATIONS GRID                       */}
      {/* ======================================= */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredDestinations.map((destination) => (
            <div 
              key={destination.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-stone-100 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Image & Badge Container */}
              <div className="relative h-72 overflow-hidden shrink-0">
                <img 
                  src={destination.image} 
                  alt={destination.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-emerald-950/85 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                  {destination.category}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-emerald-950 px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {destination.rating}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  <span className="flex items-center gap-1 text-emerald-700 font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    {destination.hotelNear}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {destination.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-3 group-hover:text-amber-600 transition-colors">
                  {destination.title}
                </h3>
                
                <p className="text-slate-500 mb-8 leading-relaxed text-sm md:text-base flex-grow">
                  {destination.description}
                </p>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">Available from Resort Desk</span>
                  <button className="text-emerald-800 font-bold tracking-wider uppercase text-sm hover:text-amber-600 transition-all flex items-center gap-1.5 group/btn">
                    Book Excursion 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================= */}
      {/* TRANSPORT & VEHICLES BANNER             */}
      {/* ======================================= */}
      <section className="pb-8 px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-amber-50 border border-amber-200 p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2 mb-3 text-amber-600">
              <Car className="w-5 h-5" />
              <span className="font-bold tracking-widest uppercase text-xs">Transport Services</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950 mb-3">Vehicle Rentals & Chauffeurs</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Need to get around? We offer a premium fleet of cars, SUVs, and private chauffeurs for your excursions or airport transfers. You can easily arrange a vehicle through our resort desk.
            </p>
          </div>
          <Link to="/login" className="relative z-10 shrink-0 px-8 py-4 bg-emerald-950 text-amber-400 font-bold tracking-widest uppercase text-sm rounded-full hover:bg-emerald-900 hover:scale-105 transition-all shadow-md inline-block text-center">
            Arrange Vehicle
          </Link>
        </div>
      </section>

      {/* ======================================= */}
      {/* EXCURSION CTA BANNER                    */}
      {/* ======================================= */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-emerald-950 text-white p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          {/* Background Decorative blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/3"></div>

          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl font-serif font-bold text-amber-500 mb-3">Need a Tailored Experience?</h3>
            <p className="text-emerald-100/70">
              Our travel concierges can design custom-crafted private tours to matches your exact interests. Speak to the reception or booking desk upon arrival.
            </p>
          </div>
          <button className="relative z-10 shrink-0 px-8 py-4 bg-amber-500 text-emerald-950 font-bold tracking-widest uppercase rounded-full hover:bg-amber-400 hover:scale-105 transition-all shadow-md">
            Talk To Guide
          </button>
        </div>
      </section>
    </div>
  );
};

export default Travel;
