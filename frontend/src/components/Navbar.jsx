import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

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
      <Link to="/" className="flex items-center gap-3 cursor-pointer">
        <div className="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full shadow-lg">
          <span className="text-xl font-bold tracking-wider text-emerald-950">S</span>
        </div>
        <span className="text-2xl font-semibold tracking-widest uppercase">Siyala</span>
      </Link>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-8 text-base font-semibold tracking-wider">
        <Link 
          to="/" 
          className={`transition-all border-b-2 py-1 ${location.pathname === '/' ? 'text-amber-500 border-amber-500' : 'text-white/90 border-transparent hover:text-amber-400 hover:border-amber-400/50'}`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`transition-all border-b-2 py-1 ${location.pathname === '/about' ? 'text-amber-500 border-amber-500' : 'text-white/90 border-transparent hover:text-amber-400 hover:border-amber-400/50'}`}
        >
          About
        </Link>
        <Link 
          to="/travel" 
          className={`transition-all border-b-2 py-1 ${location.pathname === '/travel' ? 'text-amber-500 border-amber-500' : 'text-white/90 border-transparent hover:text-amber-400 hover:border-amber-400/50'}`}
        >
          Travel
        </Link>
        <Link 
          to="/contact" 
          className={`transition-all border-b-2 py-1 ${location.pathname === '/contact' ? 'text-amber-500 border-amber-500' : 'text-white/90 border-transparent hover:text-amber-400 hover:border-amber-400/50'}`}
        >
          Contact
        </Link>
      </div>

      {/* Right CTA */}
      <div>
        <Link to="/login" className="inline-block px-6 py-2.5 text-sm font-bold tracking-wide text-emerald-950 transition-all bg-amber-500 rounded-full shadow-md hover:bg-amber-400 hover:scale-105">
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
