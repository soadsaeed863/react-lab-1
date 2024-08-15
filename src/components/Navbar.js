import React, { useState } from 'react';
import './Navbar.css';
import logo from 'https://www.shutterstock.com/image-vector/crown-icon-trendy-flat-vector-on-1254036961'; // Initially set this to a placeholder logo

const Navbar = () => {
  const [logoSrc, setLogoSrc] = useState(logo);

  return (
    <nav className="navbar">
      <img src={logoSrc} alt="Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li>Home</li>
        <li>About</li>
        <li className="profile-tab">Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;
