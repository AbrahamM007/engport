import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Artifacts from './components/Artifacts';
import SeniorProject from './components/SeniorProject';
import CollegeReadiness from './components/CollegeReadiness';
import CareerReadiness from './components/CareerReadiness';
import CursorFX from './components/CursorFX';
import AIPilot from './components/AIPilot';
import Footer from './components/Footer';

function MainContent() {
  const location = useLocation();
  
  return (
    <main className="page">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Hero />} />
        <Route path="/artifacts" element={<Artifacts />} />
        <Route path="/work" element={<Artifacts />} />
        <Route path="/senior-project" element={<SeniorProject />} />
        <Route path="/college-readiness" element={<CollegeReadiness />} />
        <Route path="/career-readiness" element={<CareerReadiness />} />
        <Route path="/contact" element={<Hero />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <CursorFX />
        <Navbar />
        <MainContent />
        <Footer />
        <AIPilot />
      </div>
    </Router>
  );
}

export default App;
