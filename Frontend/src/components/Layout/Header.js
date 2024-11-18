import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to="/home" className="header-title">Book Exchange Platform</Link>
      </div>
    </header>
  );
};

export default Header;