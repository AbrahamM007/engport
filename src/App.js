import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Artifacts from './components/Artifacts';
import SeniorProject from './components/SeniorProject';
import CollegeReadiness from './components/CollegeReadiness';
import CareerReadiness from './components/CareerReadiness';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/artifacts" element={<Artifacts />} />
          <Route path="/senior-project" element={<SeniorProject />} />
          <Route path="/college-readiness" element={<CollegeReadiness />} />
          <Route path="/career-readiness" element={<CareerReadiness />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
