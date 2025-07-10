import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Necessities from './components/Necessities';
import Accommodation from './components/Accommodation';
import Agenda from './components/Agenda';
import ActivitiesAttractions from './components/ActivitiesAttractions';
import LocalPhrases from './components/LocalPhrases';
import Feedback from './components/Feedback';
import Tips from './components/Tips';

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
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/activities-attractions" element={<ActivitiesAttractions />} />
          <Route path="/local-phrases" element={<LocalPhrases />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;