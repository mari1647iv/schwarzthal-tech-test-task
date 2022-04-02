import './Header.css';
import React from 'react';
import Logo from '../../assets/eaten-apple-white.png';


function Header() {
  return (
    <header>
      <img src={Logo} className="logo" alt="logo with eaten apple" />
      <h1>iTunes Hub</h1>
    </header>
  );
}

export default Header;