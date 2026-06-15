import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

import DashboardLayout from './layouts/DashboardLayout';
import AdminHome from './pages/admin/AdminHome';
import HotelManagement from './pages/admin/HotelManagement';
import ReservationManagement from './pages/admin/ReservationManagement';
import InventoryManagement from './pages/admin/InventoryManagement';
import EmployeeManagement from './pages/admin/EmployeeManagement';
import Finance from './pages/admin/Finance';
import Analytics from './pages/admin/Analytics';
import SettingsPage from './pages/admin/SettingsPage';
import ManagerManagement from './pages/admin/ManagerManagement';
import AdminManagement from './pages/admin/AdminManagement';
import CustomerManagement from './pages/admin/CustomerManagement';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/hotel-management" element={<HotelManagement />} />
            <Route path="/reservation-management" element={<ReservationManagement />} />
            <Route path="/inventory-management" element={<InventoryManagement />} />
            <Route path="/employee-management" element={<EmployeeManagement />} />
            <Route path="/manager-management" element={<ManagerManagement />} />
            <Route path="/admin-management" element={<AdminManagement />} />
            <Route path="/customer-management" element={<CustomerManagement />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<AdminHome />} />
          </Routes>
        </DashboardLayout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
