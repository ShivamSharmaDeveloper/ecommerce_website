import React from 'react';
import './index.css';

const Header = () => {
  return (
    <nav className="header">
    <div>

    </div>
      <ul className="nav-links">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/contact">Contact</a></li>
        <li className="nav-item"><a href="/about">About</a></li>
        <li className="nav-item"><a href="/signup">Sign Up</a></li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="What are you looking for?" />
        <button type="submit">Q</button>
      </div>
    </nav>
  );
};

export default Header;
