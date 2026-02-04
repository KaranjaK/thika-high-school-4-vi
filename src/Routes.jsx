import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Landingpage from './pages/Landingpage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/thika-high-school-4-vi/" element={<Landingpage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;