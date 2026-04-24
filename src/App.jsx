import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './pages/Home';
import Achievement from './pages/Achievement';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-bgLight">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievement" element={<Achievement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
