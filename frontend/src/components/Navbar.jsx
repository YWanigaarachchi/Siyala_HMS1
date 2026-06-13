import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

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
  );
};

export default Navbar;
