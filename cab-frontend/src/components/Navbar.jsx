// import React from 'react';
// import '../styles/Navbar.css';
// import { NavLink, useLocation, useNavigate } from "react-router-dom";

// const navigate = useNavigate();
// const location = useLocation();
// const Navbar = () => {
  
//     return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-inner">
          
//           {/* Logo Area */}
//           <div className="navbar-logo-wrapper">
//             <div className="navbar-logo-icon">
//               C
//             </div>
//             <span className="navbar-logo-text">CityCabs</span>
//           </div>

//           {/* Navigation Links */}
//           <div className="navbar-links-container">
//             <a href="#home" className="navbar-link-active">Home</a>
//             <a href="#fleet" className="navbar-link">Our Fleet</a>
//             <a href="#about" className="navbar-link">About Us</a>
//             <a href="#contact" className="navbar-link">Contact</a>
            
//             <span className="navbar-phone">+91 98765 43210</span>
            
//             <button className="navbar-btn">
//               Book a Ride
//             </button>
//           </div>
          
//         </div>
//       </div>
//     </nav>
//   );

// };

// export default Navbar;

import React, { useState } from "react";
import "../styles/Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    setOpen(false);
    navigate("/");
  };

  const goSection = (id) => {
    setOpen(false);

    // if not on home, go to home first
    if (location.pathname !== "/") {
      navigate("/");
    }

    // then scroll after render
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Logo Area */}
          <div className="navbar-logo-wrapper" onClick={goHome} role="button" tabIndex={0}>
            <div className="navbar-logo-icon">C</div>
            <span className="navbar-logo-text">CityCabs</span>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar-menu-btn"
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="navbar-menu-line" />
            <span className="navbar-menu-line" />
            <span className="navbar-menu-line" />
          </button>

          {/* Navigation Links */}
          <div className={`navbar-links-container ${open ? "open" : ""}`}>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "navbar-link-active" : "navbar-link")}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
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
              onClick={() => setOpen(false)}
            >
              About Us
            </NavLink>

            <a
              href="#contact"
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                goSection("contact");
              }}
            >
              Contact
            </a>

            <span className="navbar-phone">+91 98765 43210</span>

            <button className="navbar-btn" onClick={() => goSection("contact")}>
              Book a Ride
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;