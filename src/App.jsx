import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Necessities from './components/Necessities';
import Accommodation from './components/Accommodation';
import Transportation from './components/Transportation';
import Agenda from './components/Agenda';
import ExtraCharges from './components/ExtraCharges';
import LocalPhrases from './components/LocalPhrases';
import Feedback from './components/Feedback';

function App() {
  const [lightMode, setLightMode] = useState(() => {
    const saved = localStorage.getItem('lightMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('lightMode', JSON.stringify(lightMode));
  }, [lightMode]);

  const toggleTheme = () => setLightMode((prev) => !prev);

  return (
    <Router>
      <div className="app-container light-mode">
        <Navbar toggleTheme={toggleTheme} lightMode={lightMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/necessities" element={<Necessities />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/extra-charges" element={<ExtraCharges />} />
          <Route path="/local-phrases" element={<LocalPhrases />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;