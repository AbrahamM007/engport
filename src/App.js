import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import CursorFX from './components/CursorFX';
import AIPilot from './components/AIPilot';
import Footer from './components/Footer';

function MainContent() {
  const location = useLocation();
  
  return (
    <main className="page">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
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
