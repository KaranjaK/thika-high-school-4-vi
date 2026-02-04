import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Landingpage from './pages/Landingpage';
import HistoryPage from './pages/History';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/thika-high-school-4-vi/" element={<Landingpage />} />
        <Route path="/thika-high-school-4-vi/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;