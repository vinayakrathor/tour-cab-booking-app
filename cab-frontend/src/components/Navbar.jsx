import React, { useState } from 'react';
import '../styles/Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
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
              S
            </div>
            <span className="navbar-logo-text">{COMPANY_DETAILS.name}</span>
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
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "navbar-link-active" : "navbar-link")}
            onClick={() => {
              setIsOpen(false);
              }}>Home</NavLink>
            <NavLink
              to="/tour-packages"
              className={({ isActive }) =>
                isActive ? "navbar-link-active" : "navbar-link"
              }
            >
              Tour Packages
            </NavLink>

            

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "navbar-link-active" : "navbar-link")}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              
              className={({ isActive }) => (isActive ? "navbar-link-active" : "navbar-link")}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Contact
            </NavLink>

            <span className="navbar-phone">{COMPANY_DETAILS.phone}</span>

            {/* <button className="navbar-btn">
              Book a Ride
            </button> */}
          </div>

        </div>
      </div>
    </nav>
  );

};

export default Navbar;