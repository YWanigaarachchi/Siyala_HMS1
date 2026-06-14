import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, translations } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar when scrolled down more than 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Check initial position on mount/route change
    handleScroll();
    
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const showNavbar = !isHomePage || isVisible;

  return (
    <>
      <nav 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 text-white bg-emerald-950/90 backdrop-blur-md shadow-lg border-b border-white/10 transition-transform duration-500 ease-in-out ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo Branding */}
      <Link to="/" className="flex items-center cursor-pointer">
        <img src="/logo.png" alt="Siyala Logo" className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg object-cover border border-amber-500/30 hover:scale-105 transition-transform" />
      </Link>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-8 text-base font-semibold tracking-wider">
        <Link 
          to="/" 
          className={`transition-all border-b-2 py-1 ${location.pathname === '/' ? 'text-amber-500 border-amber-500' : 'text-white/90 border-transparent hover:text-amber-400 hover:border-amber-400/50'}`}
        >
          {t.nav.home}
        </Link>
        <Link 
          to="/about" 
          className={`transition-all border-b-2 py-1 ${location.pathname === '/about' ? 'text-amber-500 border-amber-500' : 'text-white/90 border-transparent hover:text-amber-400 hover:border-amber-400/50'}`}
        >
          {t.nav.about}
        </Link>
        <Link 
          to="/travel" 
          className={`transition-all border-b-2 py-1 ${location.pathname === '/travel' ? 'text-amber-500 border-amber-500' : 'text-white/90 border-transparent hover:text-amber-400 hover:border-amber-400/50'}`}
        >
          {t.nav.travel}
        </Link>
        <Link 
          to="/contact" 
          className={`transition-all border-b-2 py-1 ${location.pathname === '/contact' ? 'text-amber-500 border-amber-500' : 'text-white/90 border-transparent hover:text-amber-400 hover:border-amber-400/50'}`}
        >
          {t.nav.contact}
        </Link>
      </div>

      {/* Right CTA & Mobile Toggle */}
      <div className="flex items-center gap-4">
        {/* Language Selector Button */}
        <button 
          onClick={() => setIsLangModalOpen(true)}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 hover:scale-110 hover:-translate-y-0.5 p-2.5 md:p-3 rounded-full transition-all duration-300 border border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_20px_rgba(251,191,36,0.3)]"
        >
          <img src={t.flag} alt="Current Language" className="w-6 md:w-7 h-auto rounded-sm shadow-sm" />
        </button>

        <Link to="/login" className="hidden md:inline-block px-6 py-2.5 text-sm font-bold tracking-wide text-emerald-950 transition-all bg-amber-500 rounded-full shadow-md hover:bg-amber-400 hover:scale-105">
          {t.nav.login}
        </Link>
        <button 
          className="md:hidden p-2 text-amber-500 hover:text-amber-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`absolute top-full left-0 w-full bg-emerald-950/95 backdrop-blur-md border-b border-white/10 flex flex-col items-center py-8 gap-6 shadow-xl transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <Link to="/" className={`text-lg font-semibold tracking-wider ${location.pathname === '/' ? 'text-amber-500' : 'text-white'}`}>{t.nav.home}</Link>
        <Link to="/about" className={`text-lg font-semibold tracking-wider ${location.pathname === '/about' ? 'text-amber-500' : 'text-white'}`}>{t.nav.about}</Link>
        <Link to="/travel" className={`text-lg font-semibold tracking-wider ${location.pathname === '/travel' ? 'text-amber-500' : 'text-white'}`}>{t.nav.travel}</Link>
        <Link to="/contact" className={`text-lg font-semibold tracking-wider ${location.pathname === '/contact' ? 'text-amber-500' : 'text-white'}`}>{t.nav.contact}</Link>
        <Link to="/login" className="mt-4 px-8 py-3 text-sm font-bold tracking-wide text-emerald-950 bg-amber-500 rounded-full shadow-md">
          {t.nav.login}
        </Link>
      </div>
      </nav>

      {/* Language Modal */}
      {isLangModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-emerald-950/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsLangModalOpen(false)}
          ></div>
          <div className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsLangModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-red-500 bg-slate-100 p-2 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-2">Select Language</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(translations).map(([code, data]) => (
                <button
                  key={code}
                  onClick={() => { setLanguage(code); setIsLangModalOpen(false); }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${language === code ? 'border-amber-500 bg-amber-50 shadow-md scale-105' : 'border-slate-200 hover:border-amber-300 hover:bg-stone-50'}`}
                >
                  <img src={data.flag} alt={code} className="w-8 h-auto rounded-sm shadow-sm" />
                  <span className="font-bold text-emerald-950 uppercase text-xs">{data.langName}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
