import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

// Layout
import CustomerDashLayout from './layouts/CustomerDashLayout';

// Pages
import CustomerDashHome from './pages/customer_dash/CustomerDashHome';
import MyBookings from './pages/customer_dash/MyBookings';
import BookRoom from './pages/customer_dash/BookRoom';
import MyProfile from './pages/customer_dash/MyProfile';
import PaymentHistory from './pages/customer_dash/PaymentHistory';
import SupportTickets from './pages/customer_dash/SupportTickets';
import CustomerSettings from './pages/customer_dash/CustomerSettings';

function App() {
  return (
    <LanguageProvider>
      <Router>
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
      </Router>
    </LanguageProvider>
  );
}

export default App;
