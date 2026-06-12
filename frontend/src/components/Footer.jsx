import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 pt-20 pb-10 border-t border-white/10 text-emerald-50/70">
      <div className="max-w-7xl px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <div className="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full shadow-lg">
                <span className="text-xl font-bold tracking-wider text-emerald-950">S</span>
              </div>
              <span className="text-2xl font-semibold tracking-widest uppercase text-white">Siyala</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Experience the warmth of true Sri Lankan hospitality. From centuries-old heritage architecture to vibrant tropical landscapes, our sanctuaries offer an unforgettable embrace of island culture.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-emerald-950 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-emerald-950 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-emerald-950 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 lg:pl-12">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">Our Story</Link></li>
              <li><Link to="/travel" className="hover:text-amber-500 transition-colors">Travel Guide</Link></li>
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Exclusive Offers</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span>123 Heritage Way,<br />Kandy, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span>+94 81 234 5678</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span>reservations@siyala.lk</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm">Newsletter</h4>
            <p className="text-sm leading-relaxed">
              Subscribe to receive updates on exclusive offers and new destinations.
            </p>
            <div className="relative mt-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-white placeholder-emerald-100/30 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button className="absolute right-1 top-1 bottom-1 w-10 bg-amber-500 hover:bg-amber-400 text-emerald-950 rounded-full flex items-center justify-center transition-colors">
                <Send className="w-4 h-4 ml-[-2px]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} Siyala Hotels & Resorts. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
