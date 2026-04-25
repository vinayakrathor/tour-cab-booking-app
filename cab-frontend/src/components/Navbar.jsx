import React from 'react';
import '../styles/Navbar.css';


const Navbar = () => {
  
    return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          
          {/* Logo Area */}
          <div className="navbar-logo-wrapper">
            <div className="navbar-logo-icon">
              C
            </div>
            <span className="navbar-logo-text">CityCabs</span>
          </div>

          {/* Navigation Links */}
          <div className="navbar-links-container">
            <a href="#home" className="navbar-link-active">Home</a>
            <a href="#fleet" className="navbar-link">Our Fleet</a>
            <a href="#about" className="navbar-link">About Us</a>
            <a href="#contact" className="navbar-link">Contact</a>
            
            <span className="navbar-phone">+91 98765 43210</span>
            
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