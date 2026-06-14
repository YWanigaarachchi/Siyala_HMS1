import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

// Layout
import DashboardLayout from './layouts/DashboardLayout';

// Manager Pages
import ManagerHome from './pages/manager/Home';
import HotelManagement from './pages/manager/HotelManagement';
import ReservationManagement from './pages/manager/ReservationManagement';
import InventoryManagement from './pages/manager/InventoryManagement';
import EmployeeManagement from './pages/manager/EmployeeManagement';
import Finance from './pages/manager/Finance';
import Analytics from './pages/manager/Analytics';
import Settings from './pages/manager/Settings';

// Auth pages (kept from customer)
import Login from './pages/customer/Login';
import Register from './pages/customer/Register';

const ManagerApp = () => (
  <DashboardLayout>
    <Routes>
      <Route path="/" element={<ManagerHome />} />
      <Route path="/hotel-management" element={<HotelManagement />} />
      <Route path="/reservation-management" element={<ReservationManagement />} />
      <Route path="/inventory-management" element={<InventoryManagement />} />
      <Route path="/employee-management" element={<EmployeeManagement />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </DashboardLayout>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Auth routes — no layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* All manager dashboard routes */}
          <Route path="/*" element={<ManagerApp />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
