import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Flipkart Clone</h2>
      <input type="text" className="search" placeholder="Search for products..." />
    </nav>
  );
}

export default Navbar;
