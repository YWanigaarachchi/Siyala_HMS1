import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, Clock, Droplets, UtensilsCrossed, Leaf, Map, Tag, ChevronDown, Star, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState('Kandy Heritage');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [bgImage, setBgImage] = useState('/hero_bg.png');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Sarah Jenkins', rating: 5, text: 'Absolutely stunning property. The Kandy Heritage resort was everything we dreamed of and more. The staff was incredibly welcoming.' },
    { id: 2, name: 'Michael R.', rating: 4, text: 'The Hikkaduwa beachfront was perfectly maintained. Excellent food and breathtaking sunsets!' }
  ]);

  const averageRating = reviews.length > 0 ? (reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length).toFixed(1) : '0.0';

  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const tHome = t.home;

  // Update time every second and handle loading
  useEffect(() => {
    // Ensure we start at the top of the page on load/refresh
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

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
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const locations = ['Kandy Heritage', 'Hikkaduwa Beach'];

  return (
    <div className="bg-stone-50 text-slate-800">
      
      {/* Top Global Guests Banner (Hides on scroll) */}
      <div 
        className={`fixed top-0 left-0 w-full z-[100] bg-emerald-950/90 backdrop-blur-md border-b border-amber-500/30 py-3 px-4 md:px-8 transition-all duration-500 ease-in-out ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6">
          <div className="text-center md:text-left shrink-0 flex items-center gap-3">
            <span className="text-amber-500 font-serif font-bold text-lg md:text-xl drop-shadow-md">{tHome.welcoming}</span>
            <span className="hidden md:inline text-emerald-100/70 text-xs tracking-widest uppercase">{tHome.guests}</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 drop-shadow-lg">
            <img src="https://flagcdn.com/w40/us.png" alt="United States" title="United States" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/gb.png" alt="United Kingdom" title="United Kingdom" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/au.png" alt="Australia" title="Australia" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/de.png" alt="Germany" title="Germany" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/fr.png" alt="France" title="France" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/jp.png" alt="Japan" title="Japan" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/in.png" alt="India" title="India" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/cn.png" alt="China" title="China" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/ae.png" alt="UAE" title="UAE" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/ca.png" alt="Canada" title="Canada" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/sg.png" alt="Singapore" title="Singapore" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/ru.png" alt="Russia" title="Russia" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/it.png" alt="Italy" title="Italy" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/kr.png" alt="South Korea" title="South Korea" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
            <img src="https://flagcdn.com/w40/nl.png" alt="Netherlands" title="Netherlands" className="w-7 md:w-8 h-auto rounded-sm hover:-translate-y-1 transition-transform cursor-pointer shadow-sm" />
          </div>
        </div>
      </div>

      {/* Floating Review Tab */}
      <button 
        onClick={() => setIsReviewModalOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-amber-500 text-emerald-950 px-3 py-4 rounded-l-xl shadow-[0_0_15px_rgba(0,0,0,0.2)] z-50 flex flex-col items-center gap-2 hover:bg-amber-400 transition-all hover:-translate-x-1 border border-r-0 border-amber-300"
      >
        <div className="flex flex-col items-center gap-1 bg-white/30 px-1 py-1.5 rounded-lg mb-1">
          <span className="font-black text-lg leading-none">{averageRating}</span>
          <Star className="w-3 h-3 fill-emerald-950" />
        </div>
        <span className="font-bold text-xs tracking-widest [writing-mode:vertical-lr] rotate-180 mt-1">REVIEWS</span>
      </button>

      {/* Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-emerald-950/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsReviewModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => {
                setIsReviewModalOpen(false);
                setTimeout(() => setIsWritingReview(false), 300);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-red-500 bg-slate-100 p-2 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            {!isWritingReview ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-serif font-bold text-emerald-950 mb-4">Guest Reviews</h3>
                  
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="text-5xl font-black text-amber-500 drop-shadow-sm">{averageRating}</span>
                    <div className="text-left">
                      <div className="flex gap-1 mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`w-4 h-4 ${star <= Math.round(Number(averageRating)) ? 'text-amber-500 fill-amber-500' : 'text-slate-200 fill-slate-200'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-slate-500 text-xs font-medium">Based on {reviews.length} reviews</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full h-px bg-slate-100 mb-6"></div>
                
                <div className="space-y-4 mb-8 max-h-[300px] overflow-y-auto pr-2">
                  {reviews.map((rev) => (
                    <div key={rev.id} className="bg-stone-50 p-5 rounded-2xl border border-stone-200 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-emerald-950">{rev.name}</span>
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-3 h-3 ${star <= rev.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-300 fill-slate-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed italic">"{rev.text}"</p>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setIsWritingReview(true)}
                  className="w-full py-4 bg-emerald-950 text-amber-400 font-bold tracking-widest uppercase rounded-xl hover:bg-emerald-900 shadow-lg hover:shadow-xl transition-all"
                >
                  Write a Review
                </button>
              </>
            ) : (
              <div className="animate-in slide-in-from-right-4 duration-300">
                <button 
                  onClick={() => { setIsWritingReview(false); setRating(0); }}
                  className="text-emerald-700 font-bold tracking-wider uppercase text-xs hover:text-amber-600 transition-colors flex items-center gap-1 mb-6"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" /> Back to Reviews
                </button>

                <div className="text-center mb-6 mt-2">
                  <h3 className="text-3xl font-serif font-bold text-emerald-950 mb-2">Write a Review</h3>
                  <p className="text-slate-500 text-sm">Share your Siyala experience with us</p>
                </div>

                <form onSubmit={(e) => { 
                  e.preventDefault();
                  if (rating === 0) {
                    alert("Please select a star rating.");
                    return;
                  }
                  const newReview = {
                    id: Date.now(),
                    name: reviewerName,
                    rating: rating,
                    text: reviewText
                  };
                  setReviews([newReview, ...reviews]);
                  setIsWritingReview(false);
                  setRating(0);
                  setReviewerName('');
                  setReviewText('');
                }}>
                  <div className="mb-5">
                    <label className="block text-sm font-bold text-emerald-950 mb-2">Your Rating</label>
                    <div className="flex gap-2" onMouseLeave={() => setHoverRating(0)}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          className={`w-8 h-8 transition-all duration-200 cursor-pointer ${
                            star <= (hoverRating || rating) 
                              ? 'text-amber-500 fill-amber-500 scale-110' 
                              : 'text-slate-300 hover:text-slate-400'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-bold text-emerald-950 mb-2">Name</label>
                    <input 
                      type="text" 
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50" 
                      placeholder="John Doe" 
                      required 
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-bold text-emerald-950 mb-2">Your Review</label>
                    <textarea 
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50 min-h-[120px] resize-none" 
                      placeholder="Tell us about your stay..." 
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 bg-amber-500 text-emerald-950 font-bold tracking-widest uppercase rounded-xl hover:bg-amber-400 shadow-lg hover:shadow-xl transition-all">
                    Submit Review
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
      
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
          <div className="relative mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 relative">
              {/* Spinning ring around the logo */}
              <div className="absolute -inset-4 md:-inset-6 border-[3px] border-emerald-900/40 border-t-amber-500 border-r-amber-500 rounded-full animate-spin"></div>
              <div className="absolute -inset-4 md:-inset-6 border-[3px] border-transparent border-b-emerald-500/50 rounded-full animate-[spin_3s_linear_infinite]"></div>
              
              {/* Pulsing glow */}
              <div className="absolute inset-0 bg-amber-500/30 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Logo */}
              <img 
                src="/logo.png" 
                alt="Siyala Loading Logo" 
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border border-amber-500/20"
              />
            </div>
          </div>
          <h1 className="text-amber-500 font-serif font-bold tracking-[0.3em] uppercase text-2xl md:text-4xl mt-6 drop-shadow-md">SIYALA</h1>
        </div>
      </div>

      {/* ======================================= */}
      {/* 1. HERO SECTION (Full Screen)           */}
      {/* ======================================= */}
      <main className="relative flex flex-col justify-center min-h-screen px-4 md:px-8 pt-24 overflow-hidden text-white selection:bg-amber-600 selection:text-white">
        
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url('${bgImage}')` }}
        >
          <div className="absolute inset-0 bg-emerald-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950/40"></div>
        </div>
        
        <div className="relative z-10 max-w-2xl mt-12 md:mt-0 xl:ml-12">
          {/* Main Typography */}
          <h1 
            className="mb-4 text-6xl md:text-8xl lg:text-[7rem] font-bold leading-none font-serif tracking-tight"
            style={{ 
              textShadow: "2px 2px 0 #1e293b, 4px 4px 0 #0f172a, 6px 6px 20px rgba(0,0,0,0.8)"
            }}
          >
            {tHome.welcome} <br />
            <span 
              className="font-black text-amber-500 block mt-2 md:mt-4"
              style={{
                textShadow: "2px 2px 0 #d97706, 4px 4px 0 #b45309, 6px 6px 0 #78350f, 8px 8px 25px rgba(0,0,0,0.9)"
              }}
            >
              {tHome.sriLankan}
            </span>
          </h1>
          <p 
            className="mb-10 text-lg md:text-2xl font-medium tracking-[0.15em] uppercase text-emerald-50 mt-6"
            style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.8)" }}
          >
            {tHome.system}
          </p>

          {/* Floating Search Bar */}
          <div style={{ display: 'none' }} className="flex flex-col md:flex-row items-center gap-4 p-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl">
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
              onClick={() => setBgImage('/sl_culture_1.png')}
              className="w-40 h-56 object-cover rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-2 border-white/20 transform rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer" 
            />
            <img 
              src="/sl_culture_2.png" 
              alt="Tropical Resort" 
              onClick={() => setBgImage('/sl_culture_2.png')}
              className="w-48 h-40 object-cover rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-2 border-white/20 transform rotate-[4deg] hover:rotate-0 hover:scale-105 transition-all duration-300 -ml-12 cursor-pointer" 
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
          <h2 className="text-4xl font-serif font-bold text-emerald-950 mb-4">{tHome.explore}</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From the misty cultural highlands to the sun-kissed southern coasts, discover the perfect Sri Lankan escape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Kandy Heritage Card */}
          <div className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-slate-100">
            <div 
              className="relative h-72 overflow-hidden cursor-pointer"
              onClick={() => {
                setBgImage('/kandy_hotel.png');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
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
            <div 
              className="relative h-72 overflow-hidden cursor-pointer"
              onClick={() => {
                setBgImage('/hikkaduwa_hotel.png');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
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
