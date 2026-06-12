import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 text-white bg-emerald-950/40 backdrop-blur-md border-b border-white/10">
      {/* Logo Branding */}
      <Link to="/" className="flex items-center gap-3 cursor-pointer">
        <div className="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full shadow-lg">
          <span className="text-xl font-bold tracking-wider text-emerald-950">S</span>
        </div>
        <span className="text-2xl font-semibold tracking-widest uppercase">Siyala</span>
      </Link>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
        <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-amber-500 transition-colors">About</Link>
        <Link to="/contact" className="hover:text-amber-500 transition-colors">Contact</Link>
        <Link to="/login" className="hover:text-amber-500 transition-colors">Log In</Link>
      </div>

      {/* Right CTA */}
      <div>
        <Link to="/login" className="inline-block px-6 py-2.5 text-sm font-bold tracking-wide text-emerald-950 transition-all bg-amber-500 rounded-full shadow-md hover:bg-amber-400 hover:scale-105">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
