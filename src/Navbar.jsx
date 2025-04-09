// src/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css'; // Stil ayrıca saxlayırıq

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

    <div className="logo">FastMaster</div>
  
    <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#projects">Projects</a></li>
    </ul>
  
    <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
      ☰
    </div>
  </nav>
  
  );
}

export default Navbar;
