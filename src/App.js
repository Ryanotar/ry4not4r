import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import Biografia from './biografia/biografia';
import Contact from './contact/contact';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
