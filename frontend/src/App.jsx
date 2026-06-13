import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ArrowUp, MessageCircle, X } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/customer/Home';
import About from './pages/customer/About';
import Contact from './pages/customer/Contact';
import Login from './pages/customer/Login';
import Register from './pages/customer/Register';
import Travel from './pages/customer/Travel';

// Component to scroll to top on every page/route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-28 right-8 p-3 md:p-4 bg-amber-500 text-emerald-950 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:bg-amber-400 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
    </button>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/94771234567"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pop-out Ping Animation background */}
      <span className="absolute inline-flex w-full h-full rounded-full opacity-60 animate-ping bg-[#25D366]"></span>
      {/* Icon */}
      <MessageCircle className="relative z-10 w-7 h-7" />
    </a>
  );
};

const LanguageSelector = () => {
  const { language, setLanguage, t, translations } = useLanguage();
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsLangModalOpen(true)}
        className="fixed bottom-6 left-6 bg-white text-emerald-950 p-3 rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.3)] z-50 flex items-center gap-2 hover:bg-stone-100 transition-all hover:scale-110 border-2 border-emerald-950"
      >
        <img src={t.flag} alt="Current Language" className="w-6 h-auto rounded-sm shadow-sm" />
      </button>

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

const AppContent = () => {
  const location = useLocation();
  const hideHeaderFooter = ['/login', '/register'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen relative">
      {!hideHeaderFooter && <Navbar />}
      <ScrollToTopButton />
      <LanguageSelector />
      {!hideHeaderFooter && <FloatingWhatsApp />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
