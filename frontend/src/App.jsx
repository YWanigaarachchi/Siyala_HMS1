import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

import DashboardLayout from './layouts/DashboardLayout';
import AdminHome from './pages/admin/AdminHome';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<AdminHome />} />
            {/* Catch-all route can be added here if needed, but for now we route / to AdminHome */}
            <Route path="*" element={<AdminHome />} />
          </Routes>
        </DashboardLayout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
