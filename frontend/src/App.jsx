import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { LanguageProvider } from './context/LanguageContext';

// Layouts & Global Components
import DashboardLayout from './layouts/DashboardLayout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// =====================
// Customer Pages
// =====================
import CustomerHome from './pages/customer/Home';
import About from './pages/customer/About';
import Contact from './pages/customer/Contact';
import Login from './pages/customer/Login';
import Register from './pages/customer/Register';
import Travel from './pages/customer/Travel';

// =====================
// Admin Pages
// =====================
import AdminHome from './pages/admin/AdminHome';
import AdminHotelManagement from './pages/admin/HotelManagement';
import AdminReservationManagement from './pages/admin/ReservationManagement';
import AdminInventoryManagement from './pages/admin/InventoryManagement';
import AdminEmployeeManagement from './pages/admin/EmployeeManagement';
import AdminFinance from './pages/admin/Finance';
import AdminAnalytics from './pages/admin/Analytics';
import AdminSettingsPage from './pages/admin/SettingsPage';
import AdminManagerManagement from './pages/admin/ManagerManagement';
import AdminManagement from './pages/admin/AdminManagement';
import AdminCustomerManagement from './pages/admin/CustomerManagement';

// =====================
// Manager Pages
// =====================
import ManagerHome from './pages/manager/Home';
import ManagerHotelManagement from './pages/manager/HotelManagement';
import ManagerReservationManagement from './pages/manager/ReservationManagement';
import ManagerInventoryManagement from './pages/manager/InventoryManagement';
import ManagerEmployeeManagement from './pages/manager/EmployeeManagement';
import ManagerFinance from './pages/manager/Finance';
import ManagerAnalytics from './pages/manager/Analytics';
import ManagerSettings from './pages/manager/Settings';
import ManagerProfile from './pages/manager/Profile';

// =====================
// Customer Dashboard Pages
// =====================
import CustomerDashLayout from './layouts/CustomerDashLayout';
import CustomerDashHome from './pages/customer_dash/CustomerDashHome';
import MyBookings from './pages/customer_dash/MyBookings';
import BookRoom from './pages/customer_dash/BookRoom';
import MyProfile from './pages/customer_dash/MyProfile';
import PaymentHistory from './pages/customer_dash/PaymentHistory';
import SupportTickets from './pages/customer_dash/SupportTickets';
import CustomerSettings from './pages/customer_dash/CustomerSettings';

// =====================
// Helper Components
// =====================
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
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <span className="absolute inline-flex w-full h-full rounded-full opacity-60 animate-ping bg-[#25D366]"></span>
      <MessageCircle className="relative z-10 w-7 h-7" />
    </a>
  );
};

// =====================
// Portal Wrappers
// =====================

const CustomerApp = () => {
  const location = useLocation();
  const hideHeaderFooter = ['/login', '/register'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen relative">
      {!hideHeaderFooter && <Navbar />}
      <ScrollToTopButton />
      {!hideHeaderFooter && <FloatingWhatsApp />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<CustomerHome />} />
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

const AdminApp = () => (
  <DashboardLayout>
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/hotel-management" element={<AdminHotelManagement />} />
      <Route path="/reservation-management" element={<AdminReservationManagement />} />
      <Route path="/inventory-management" element={<AdminInventoryManagement />} />
      <Route path="/employee-management" element={<AdminEmployeeManagement />} />
      <Route path="/manager-management" element={<AdminManagerManagement />} />
      <Route path="/admin-management" element={<AdminManagement />} />
      <Route path="/customer-management" element={<AdminCustomerManagement />} />
      <Route path="/finance" element={<AdminFinance />} />
      <Route path="/analytics" element={<AdminAnalytics />} />
      <Route path="/settings" element={<AdminSettingsPage />} />
      <Route path="*" element={<AdminHome />} />
    </Routes>
  </DashboardLayout>
);

const ManagerApp = () => (
  <DashboardLayout>
    <Routes>
      <Route path="/" element={<ManagerHome />} />
      <Route path="/hotel-management" element={<ManagerHotelManagement />} />
      <Route path="/reservation-management" element={<ManagerReservationManagement />} />
      <Route path="/inventory-management" element={<ManagerInventoryManagement />} />
      <Route path="/employee-management" element={<ManagerEmployeeManagement />} />
      <Route path="/finance" element={<ManagerFinance />} />
      <Route path="/analytics" element={<ManagerAnalytics />} />
      <Route path="/settings" element={<ManagerSettings />} />
      <Route path="/profile" element={<ManagerProfile />} />
      <Route path="*" element={<ManagerHome />} />
    </Routes>
  </DashboardLayout>
);

const CustomerDashboardApp = () => (
  <CustomerDashLayout>
    <Routes>
      <Route path="/" element={<CustomerDashHome />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/book-room" element={<BookRoom />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/payments" element={<PaymentHistory />} />
      <Route path="/support" element={<SupportTickets />} />
      <Route path="/settings" element={<CustomerSettings />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </CustomerDashLayout>
);

// =====================
// Main App Component
// =====================
function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/admin/*" element={<AdminApp />} />
          <Route path="/manager/*" element={<ManagerApp />} />
          <Route path="/dashboard/*" element={<CustomerDashboardApp />} />
          <Route path="/*" element={<CustomerApp />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
