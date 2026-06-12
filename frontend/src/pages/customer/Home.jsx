import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, Clock, Droplets, UtensilsCrossed, Leaf, Map, Tag, ChevronDown } from 'lucide-react';

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState('Kandy Heritage');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  // Update time every second and handle loading
  useEffect(() => {
    // Ensure we start at the top of the page on load/refresh
    window.scrollTo(0, 0);
    
    // Simulate loading for splash screen
    const splashTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(splashTimer);
    };
  }, []);

  const locations = ['Kandy Heritage', 'Hikkaduwa Beach'];

  return (
    <div className="bg-stone-50 text-slate-800">
      
      {/* ======================================= */}
      {/* SPLASH SCREEN (LOADING)                 */}
      {/* ======================================= */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-emerald-950 transition-all duration-1000 ease-in-out ${
          isLoading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-amber-500/5 blur-[120px] mix-blend-overlay"></div>
        <div className="relative flex flex-col items-center transform transition-transform duration-1000 scale-100 hover:scale-105">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
            <div className="absolute inset-0 bg-amber-500/30 rounded-full blur-2xl animate-pulse"></div>
            <img 
              src="/logo.png" 
              alt="Siyala Loading Logo" 
              className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border border-amber-500/30 animate-pulse"
            />
          </div>
          <div className="w-8 h-8 border-2 border-emerald-900 border-t-amber-500 rounded-full animate-spin mt-4"></div>
        </div>
      </div>

      {/* ======================================= */}
      {/* 1. HERO SECTION (Full Screen)           */}
      {/* ======================================= */}
      <main className="relative flex flex-col justify-center min-h-screen px-4 md:px-8 pt-24 overflow-hidden text-white selection:bg-amber-600 selection:text-white">
        
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
            <span className="font-semibold text-amber-500 drop-shadow-md">Sri Lankan</span>
          </h1>
          <p className="mb-10 text-lg font-light tracking-wide text-emerald-50 md:text-xl drop-shadow-md">
            Multi-chain Hotel Management System
          </p>

          {/* Floating Search Bar */}
          <div className="flex flex-col md:flex-row items-center gap-4 p-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl">
            <div className="flex items-center w-full md:flex-1 gap-3 md:gap-4 px-2 md:px-4 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0">
              <span className="text-xs font-bold tracking-wider text-amber-400 uppercase shrink-0 drop-shadow-sm">Locations</span>
              <div className="flex gap-2 overflow-x-auto no-scrollbar w-full">
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

        {/* CULTURAL IMAGES & FLOATING LIVE CLOCK */}
        <div className="relative z-20 w-full max-w-4xl mx-auto mt-12 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-12 xl:right-24 md:mt-0 md:mx-0 flex flex-col-reverse md:flex-row gap-12 items-center justify-end">
          
          {/* Cultural Photo Collage */}
          <div className="hidden lg:flex flex-col gap-6 mr-8">
            <img 
              src="/sl_culture_1.png" 
              alt="Sri Lankan Culture" 
              className="w-40 h-56 object-cover rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-2 border-white/20 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300" 
            />
            <img 
              src="/sl_culture_2.png" 
              alt="Tropical Resort" 
              className="w-48 h-40 object-cover rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-2 border-white/20 transform rotate-[4deg] hover:rotate-0 transition-transform duration-300 -ml-12" 
            />
          </div>

          {/* Floating Seamless Clock */}
          <div className="flex flex-col items-end text-right p-4 w-full max-w-sm">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-medium text-amber-500 tracking-[0.2em] uppercase drop-shadow-md">Sri Lanka Time</h3>
              <Clock className="w-6 h-6 text-amber-400 drop-shadow-md" />
            </div>
            <p className="text-sm font-semibold text-emerald-100/80 mb-8 uppercase tracking-widest drop-shadow-md">{selectedLocation}</p>
            
            <div className="text-7xl md:text-8xl font-bold tracking-wider text-white mb-4 drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)]">
              {currentTime.toLocaleTimeString('en-US', { hour12: true })}
            </div>
            <div className="text-xl font-light tracking-widest text-emerald-50 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] uppercase">
              {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div 
          onClick={() => document.getElementById('explore').scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer text-white/70 hover:text-amber-400 transition-colors z-20"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-bold drop-shadow-md">Scroll</span>
          <ChevronDown className="w-6 h-6 drop-shadow-md" />
        </div>
      </main>

      {/* ======================================= */}
      {/* 2. EXPLORE OUR SANCTUARIES (Locations)  */}
      {/* ======================================= */}
      <section id="explore" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-emerald-950 mb-4">Explore Our Sanctuaries</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From the misty cultural highlands to the sun-kissed southern coasts, discover the perfect Sri Lankan escape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Kandy Heritage Card */}
          <div className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-slate-100">
            <div className="relative h-72 overflow-hidden">
              <img 
                src="/kandy_hotel.png" 
                alt="Kandy Heritage" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                Cultural Capital
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-bold text-emerald-950">Kandy Heritage Resort</h3>
                <div className="flex items-center text-amber-500 font-bold">
                  ★ 4.9
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Immerse yourself in royal history. Nestled amongst misty mountains, this luxury resort blends traditional Kandyan architecture with modern elegance.
              </p>
              <button className="text-emerald-700 font-bold tracking-wider uppercase text-sm hover:text-amber-600 transition-colors flex items-center gap-2">
                Discover More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hikkaduwa Beach Card */}
          <div className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-slate-100">
            <div className="relative h-72 overflow-hidden">
              <img 
                src="/hikkaduwa_hotel.png" 
                alt="Hikkaduwa Beach" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-sm text-emerald-950 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                Coastal Paradise
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-bold text-emerald-950">Hikkaduwa Oceanfront</h3>
                <div className="flex items-center text-amber-500 font-bold">
                  ★ 4.8
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Step directly onto golden sands. Experience vibrant marine life, luxury private cabanas, and spectacular Indian Ocean sunsets.
              </p>
              <button className="text-emerald-700 font-bold tracking-wider uppercase text-sm hover:text-amber-600 transition-colors flex items-center gap-2">
                Discover More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* 3. SIGNATURE EXPERIENCES (Amenities)    */}
      {/* ======================================= */}
      <section className="py-24 bg-emerald-950 text-emerald-50">
        <div className="max-w-7xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
              <h2 className="text-4xl font-serif font-bold text-amber-500 mb-4">Signature Experiences</h2>
              <p className="text-lg text-emerald-100/70 max-w-lg">
                We curate unforgettable moments. Whether you seek relaxation or adventure, our world-class amenities cater to your every desire.
              </p>
            </div>
            <button className="px-8 py-4 bg-transparent border border-amber-500 text-amber-500 rounded-full font-bold tracking-widest uppercase hover:bg-amber-500 hover:text-emerald-950 transition-colors">
              View All Amenities
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors group">
              <Leaf className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-3">Ayurvedic Spa</h4>
              <p className="text-emerald-100/60 text-sm leading-relaxed">Rejuvenate your body and mind with authentic, ancient Sri Lankan healing treatments.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors group">
              <UtensilsCrossed className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-3">Fine Dining</h4>
              <p className="text-emerald-100/60 text-sm leading-relaxed">Savor exquisite local spices and international cuisines prepared by award-winning chefs.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors group">
              <Droplets className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-3">Infinity Pools</h4>
              <p className="text-emerald-100/60 text-sm leading-relaxed">Swim seamlessly into the horizon with our temperature-controlled panoramic pools.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors group">
              <Map className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-3">Guided Tours</h4>
              <p className="text-emerald-100/60 text-sm leading-relaxed">Explore ancient ruins, tea plantations, and wildlife reserves with expert local guides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* 4. EXCLUSIVE OFFERS BANNER              */}
      {/* ======================================= */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-amber-100 flex flex-col md:flex-row items-center justify-between p-12 md:p-16 shadow-lg">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="relative z-10 max-w-xl mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-6 h-6 text-amber-600" />
              <span className="font-bold tracking-widest text-amber-700 uppercase text-sm">Special Promotion</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-emerald-950 mb-4">Tropical Escape Package</h2>
            <p className="text-lg text-emerald-900/80">
              Book a stay of 3 nights or more at any Siyala resort and enjoy a <strong>20% discount</strong> along with complimentary spa access.
            </p>
          </div>
          
          <div className="relative z-10 w-full md:w-auto">
            <button className="w-full md:w-auto px-10 py-5 bg-emerald-950 text-amber-400 font-bold tracking-widest uppercase rounded-full shadow-xl hover:bg-emerald-900 hover:scale-105 transition-all">
              Claim Offer Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
