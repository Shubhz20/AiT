import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar = ({ toggleTheme, lightMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/necessities', label: 'Necessities' },
    { path: '/accommodation', label: 'Accommodation' },
    { path: '/transportation', label: 'Transportation' },
    { path: '/agenda', label: 'Trip Agenda' },
    { path: '/activities-attractions', label: 'Activities & Attractions' },
    { path: '/local-phrases', label: 'Local Phrases' },
    { path: '/feedback', label: 'Feedback' },
  ];

  const isActive = (path) => location.pathname === path;
  const iconColor = lightMode ? '#3a8dde' : '#a3e3ff';
  const textColor = lightMode ? '#23272f' : '#f1f1f1';

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <MapPin size={32} color={iconColor} />
            <span style={{ fontFamily: 'serif', fontWeight: 'bold', fontSize: '1.3rem', marginLeft: 8, color: textColor }}>
              Explore Egypt
            </span>
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="navbar-link"
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                fontWeight: 500,
                color: isActive(item.path)
                  ? (lightMode ? '#fff' : '#181a20')
                  : (lightMode ? '#3a8dde' : '#a3e3ff'),
                background: isActive(item.path)
                  ? (lightMode ? '#3a8dde' : '#a3e3ff')
                  : 'transparent',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              {item.label}
            </Link>
          ))}
          <button
            className="button navbar-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            style={{ marginLeft: 16, fontSize: 18 }}
          >
            {lightMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
        {/* Mobile menu button */}
        <div className="navbar-mobile-menu">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="button"
            style={{ background: 'none', boxShadow: 'none', color: iconColor, fontSize: 24, padding: 8 }}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} color={iconColor} /> : <Menu size={28} color={iconColor} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="navbar-mobile-dropdown">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="navbar-link"
                style={{
                  padding: '10px 16px',
                  borderRadius: 8,
                  fontWeight: 500,
                  color: isActive(item.path)
                    ? (lightMode ? '#fff' : '#181a20')
                    : (lightMode ? '#3a8dde' : '#a3e3ff'),
                  background: isActive(item.path)
                    ? (lightMode ? '#3a8dde' : '#a3e3ff')
                    : 'transparent',
                  textDecoration: 'none',
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="button navbar-theme-toggle"
              style={{ marginTop: 8, fontSize: 18 }}
              onClick={toggleTheme}
              aria-label="Toggle light/dark mode"
            >
              {lightMode ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;