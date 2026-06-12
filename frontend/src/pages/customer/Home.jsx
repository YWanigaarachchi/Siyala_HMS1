import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, Clock } from 'lucide-react';

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState('Kandy Heritage');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const locations = ['Kandy Heritage', 'Hikkaduwa Beach'];

  return (
    <main className="relative flex flex-col justify-center min-h-screen px-8 pt-24 overflow-hidden text-white selection:bg-amber-600 selection:text-white">
      
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/hero_bg.png')` }}
      >
        <div className="absolute inset-0 bg-emerald-950/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950/40"></div>
      </div>
      
      <div className="relative z-10 max-w-2xl mt-12 md:mt-0 xl:ml-12">
        {/* Main Typography */}
        <h1 className="mb-4 text-5xl font-light leading-tight md:text-7xl font-serif drop-shadow-lg">
          Welcome to <br />
          <span className="font-semibold text-amber-500">Sri Lankan</span>
        </h1>
        <p className="mb-10 text-lg font-light tracking-wide text-emerald-50 md:text-xl drop-shadow-md">
          Multi-chain Hotel Management System
        </p>

        {/* Floating Search Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 p-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl">
          <div className="flex items-center flex-1 w-full gap-4 px-4 border-r border-white/20">
            <span className="text-xs font-bold tracking-wider text-amber-400 uppercase shrink-0">Locations</span>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded-full whitespace-nowrap ${
                    selectedLocation === loc 
                      ? 'bg-amber-500 text-emerald-950 shadow-md' 
                      : 'bg-white/10 text-white hover:bg-white/30 border border-white/10'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  {loc}
                </button>
              ))}
            </div>
          </div>
          <button className="flex items-center justify-center w-full px-8 py-4 font-bold tracking-wider text-emerald-950 transition-all bg-amber-500 rounded-full md:w-auto hover:bg-amber-400 group shrink-0">
            SEARCH
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* --- CULTURAL IMAGES & LIVE CLOCK CARD --- */}
      <div className="relative z-20 w-full max-w-3xl mx-auto mt-12 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-12 xl:right-24 md:mt-0 md:mx-0 flex gap-6 items-center justify-end">
        
        {/* Cultural Photo Collage */}
        <div className="hidden lg:flex flex-col gap-6 mr-4">
          <img 
            src="/sl_culture_1.png" 
            alt="Sri Lankan Culture" 
            className="w-40 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white/10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300" 
          />
          <img 
            src="/sl_culture_2.png" 
            alt="Tropical Resort" 
            className="w-48 h-40 object-cover rounded-2xl shadow-2xl border-4 border-white/10 transform rotate-[3deg] hover:rotate-0 transition-transform duration-300 -ml-8" 
          />
        </div>

        {/* The Live Clock Card */}
        <div className="flex flex-col items-center justify-center p-10 bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl text-slate-800 w-full max-w-sm border border-white/20">
          <div className="p-4 mb-4 rounded-full bg-emerald-50 text-emerald-700 shadow-sm">
            <Clock className="w-8 h-8" />
          </div>
          
          <h3 className="text-xl font-bold text-emerald-950 mb-1">Sri Lanka Time</h3>
          <p className="text-xs font-semibold text-amber-600 mb-8 uppercase tracking-widest">{selectedLocation}</p>
          
          <div className="text-5xl font-light tracking-widest text-emerald-950 mb-3 font-serif drop-shadow-sm">
            {currentTime.toLocaleTimeString('en-US', { hour12: false })}
          </div>
          <div className="text-md font-medium text-slate-500">
            {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

      </div>
    </main>
  );
};

export default Home;
