import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-stone-50 min-h-screen text-slate-800 selection:bg-amber-600 selection:text-white">
      {/* ======================================= */}
      {/* HERO SECTION                            */}
      {/* ======================================= */}
      <section className="relative bg-emerald-950 pt-32 pb-24 px-8 overflow-hidden text-center text-white">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/4"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">
            Get in <span className="font-semibold text-amber-500">Touch</span>
          </h1>
          <p className="text-emerald-100/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We are here to assist you with your bookings, general inquiries, or any special requests to make your stay unforgettable.
          </p>
        </div>
      </section>

      {/* ======================================= */}
      {/* MAIN CONTACT CONTENT                    */}
      {/* ======================================= */}
      <section className="py-16 px-8 max-w-7xl mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT: Contact Form & WhatsApp */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-stone-100 flex flex-col">
            <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-2">Send a Message</h2>
            <p className="text-slate-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

            <form className="flex-grow flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wider text-emerald-950 uppercase">First Name</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm" placeholder="John" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wider text-emerald-950 uppercase">Last Name</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm" placeholder="Doe" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-wider text-emerald-950 uppercase">Email Address</label>
                <input type="email" className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm" placeholder="john@example.com" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-wider text-emerald-950 uppercase">Message</label>
                <textarea rows="4" className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="mt-4 w-full py-4 bg-emerald-950 text-amber-400 font-bold tracking-widest uppercase text-sm rounded-xl hover:bg-emerald-900 transition-colors shadow-md flex justify-center items-center gap-2 group">
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-stone-100">
              <h3 className="text-sm font-bold tracking-widest text-emerald-950 uppercase mb-4 text-center">Need an instant reply?</h3>
              <a href="https://wa.me/94771234567" target="_blank" rel="noreferrer" className="w-full py-4 bg-[#25D366] text-white font-bold tracking-widest uppercase text-sm rounded-xl hover:bg-[#20bd5a] transition-colors shadow-md flex justify-center items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Quick Connect via WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT: Info & Map */}
          <div className="flex flex-col gap-8">
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-emerald-950 mb-1">Call Us</h4>
                <p className="text-sm text-slate-500">+94 11 234 5678</p>
                <p className="text-xs text-slate-400 mt-1">Mon-Fri, 9am - 6pm</p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-emerald-950 mb-1">Email Us</h4>
                <p className="text-sm text-slate-500">support@siyalahotels.lk</p>
                <p className="text-xs text-slate-400 mt-1">24/7 Online Support</p>
              </div>
            </div>

            {/* Map Container */}
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-stone-100 flex-grow flex flex-col min-h-[400px]">
              <div className="flex items-center gap-2 mb-4 px-2 text-emerald-950">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span className="font-bold tracking-wide">Siyala Headquarters, Colombo</span>
              </div>
              <div className="w-full flex-grow rounded-2xl overflow-hidden bg-stone-100">
                {/* Embed Google Maps */}
                <iframe 
                  title="Siyala Hotels Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585976575!2d79.7738029966113!3d6.92192208477755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1718105000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
