import React, { useState } from 'react';
import phonepng from '../assests/phone.png';
import Line from '../assests/Line 1.png';
import './Navbar.css';
import ShortAppYardLogo from '../assests/ShortAppYard.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const handleToggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <div className="navbar-logo">
        <img src={ShortAppYardLogo} alt="Logo" className="ImageNavbarLogo" />
        <div className="innerNavbarAppYard">App Yard</div>
      </div>
      <button
        aria-controls="primary-navigation"
        aria-expanded={isNavVisible}
        className="mobile-nav-toggle"
        cross-visible = {isNavVisible ? "true" : "false"}
        onClick={handleToggleNav}
      >
        <span className="sr-only"></span>
      </button>
      <div
        className="navbar-permanent"
        id="primary-navigation"
        data-visible={isNavVisible ? 'true' : 'false'}
      >
        <div className="navbar-buttons">
          <button style={{ width: 120 }}>Home</button>
          <button>Services</button>
          <button>Why choose us?</button>
          <button style={{ marginLeft: 20 }}>How it works?</button>
        </div>
        <div className="quote">
          <img src={phonepng} alt="call" className="phonepng" />
          <img src={Line} alt="call" className="line" />
          <button className="quote-button">Get a Quote</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
