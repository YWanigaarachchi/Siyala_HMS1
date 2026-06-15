import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

import AdminHome from './pages/admin/AdminHome';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<AdminHome />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
