import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Artifacts from './components/Artifacts';
import SeniorProject from './components/SeniorProject';
import CollegeReadiness from './components/CollegeReadiness';
import CareerReadiness from './components/CareerReadiness';
import './App.css';
import { AnimatePresence, motion } from 'framer-motion';
import CursorFX from './components/CursorFX';
import ParticlesBG from './components/ParticlesBG';
import AIPilot from './components/AIPilot';
import Footer from './components/Footer';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        className="page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Hero />} />
          <Route path="/artifacts" element={<Artifacts />} />
          <Route path="/senior-project" element={<SeniorProject />} />
          <Route path="/college-readiness" element={<CollegeReadiness />} />
          <Route path="/career-readiness" element={<CareerReadiness />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Global FX layers */}
        <div className="fx-stars"></div>
        <div className="fx-noise"></div>
        <ParticlesBG />
        <CursorFX />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <AIPilot />
      </div>
    </Router>
  );
}

export default App;
