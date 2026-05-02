import React, { useState } from 'react';
import '../styles/Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { COMPANY_DETAILS } from '../ComponyDetails';
import { PhoneCall } from "lucide-react";
import logo from '../assets/images/heavylogo-photoroom.png';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
                <img 
                  src={logo}
                  alt="Company Logo"
                  className="navbar-logo-img"
                />
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
            <button
              className={location.pathname === "/" ? "navbar-link-active" : "navbar-link"}
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}>Home</button>
            <button
              className={location.pathname === "/tour-packages" ? "navbar-link-active" : "navbar-link"}
              onClick={() => {
                navigate("/tour-packages");
                setIsOpen(false);
              }}
            >
              Tour Packages
            </button>



            <button
              className={location.pathname === "/about" ? "navbar-link-active" : "navbar-link"}
              onClick={() => {
                navigate("/about");
                setIsOpen(false);
              }}
            >
              About Us
            </button>
            <button
              className={location.pathname === "/contact-us" ? "navbar-link-active" : "navbar-link"}
              onClick={() => {
                navigate("/contact-us");
                setIsOpen(false);
              }}
            >
              Contact
            </button>

            <span className="flex items-center space-x-2 navbar-phone">
              <span>{COMPANY_DETAILS.phone}</span>
              <PhoneCall size={20} />
            </span>
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