import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
      <h3 className="logo">LOGO</h3>
      <div className="header-item">
        <p>Home</p>
        <p>My Portfolio</p>
        <p>Clients</p>
        <button className="get-in-touch">
          Get in Touch
        </button>
      </div>
    </div>
    </div>
  )
}

export default Header;