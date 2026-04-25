import React, { useState } from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { COMPANY_DETAILS } from '../ComponyDetails';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">

          {/* Logo Area */}
          <div className="navbar-logo-wrapper">
            <div className="navbar-logo-icon">
              A
            </div>
            <span className="navbar-logo-text">AssureCab</span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className={`navbar-toggle-btn ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Navigation Links */}
          <div className={`navbar-links-container ${isOpen ? 'mobile-active' : ''}`}>
            <button className="navbar-link-active"
              onClick={() => {
                setIsOpen(false);
                navigate('/')
              }}>
              Home
            </button>
            <a href="#fleet" className="navbar-link" onClick={() => setIsOpen(false)}>Routes</a>
            <a href="#about" className="navbar-link" onClick={() => setIsOpen(false)}>About Us</a>
            <button className="navbar-link"
              onClick={() => {
                setIsOpen(false);
                navigate("/contact-us");
              }}
            >
              Contact
            </button>

            <span className="navbar-phone">{COMPANY_DETAILS.phone}</span>

            <button className="navbar-btn">
              Book a Ride
            </button>
          </div>

        </div>
      </div>
    </nav>
  );

};

export default Navbar;