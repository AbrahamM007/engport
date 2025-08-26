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
import CursorFX from './components/CursorFX';
import AIPilot from './components/AIPilot';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <CursorFX />
        <Navbar />
        <main className="page">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/artifacts" element={<Artifacts />} />
            <Route path="/senior-project" element={<SeniorProject />} />
            <Route path="/college-readiness" element={<CollegeReadiness />} />
            <Route path="/career-readiness" element={<CareerReadiness />} />
          </Routes>
        </main>
        <Footer />
        <AIPilot />
      </div>
    </Router>
  );
}

export default App;
