import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, ShoppingBag, Bed, Calendar, DollarSign, MessageCircle, Sparkles, Star, Home as HomeIcon } from 'lucide-react';
import aiesecLogo from '../png-transparent-aiesec-hd-logo.png';

const Navbar = ({ toggleTheme, lightMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [showLogo, setShowLogo] = useState(true);
  // Remove scroll logic and always show the logo

  const navItems = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/necessities', label: 'Necessities', icon: ShoppingBag },
    { path: '/accommodation', label: 'Accommodation', icon: Bed },
    { path: '/agenda', label: 'Trip Agenda', icon: Calendar },
    { path: '/tips', label: 'Tips', icon: Sparkles },
    { path: '/local-phrases', label: 'Local Phrases', icon: MessageCircle },
    { path: '/feedback', label: 'Feedback', icon: Star },
  ];

  const isActive = (path) => location.pathname === path;
  const iconColor = lightMode ? '#3a8dde' : '#a3e3ff';
  const textColor = lightMode ? '#23272f' : '#f1f1f1';

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', height: 64 }}>
            <img
              src={aiesecLogo}
              alt="AIESEC Logo"
              style={{ height: 56, width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="navbar-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="navbar-link flex items-center justify-center group"
                style={{
                  padding: '8px',
                  borderRadius: 12,
                  background: isActive(item.path)
                    ? (lightMode ? '#3a8dde' : '#a3e3ff')
                    : 'transparent',
                  color: isActive(item.path)
                    ? (lightMode ? '#fff' : '#181a20')
                    : iconColor,
                  transition: 'background 0.2s, color 0.2s',
                  fontSize: 0,
                  width: 44,
                  height: 44,
                }}
                title={item.label}
              >
                <span className="transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] group-hover:scale-110">
                  <Icon size={28} color={isActive(item.path) ? (lightMode ? '#fff' : '#181a20') : iconColor} />
                </span>
              </Link>
            );
          })}
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
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="navbar-link flex items-center justify-center group"
                  style={{
                    padding: '10px',
                    borderRadius: 12,
                    background: isActive(item.path)
                      ? (lightMode ? '#3a8dde' : '#a3e3ff')
                      : 'transparent',
                    color: isActive(item.path)
                      ? (lightMode ? '#fff' : '#181a20')
                      : iconColor,
                    transition: 'background 0.2s, color 0.2s',
                    fontSize: 0,
                    width: 48,
                    height: 48,
                  }}
                  title={item.label}
                >
                  <span className="transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] group-hover:scale-110">
                    <Icon size={28} color={isActive(item.path) ? (lightMode ? '#fff' : '#181a20') : iconColor} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;