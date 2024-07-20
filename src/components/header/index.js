import React from 'react';
import Wishlist from '../../assets/images/Wishlist.png';
import Heart from '../../assets/images/cart.png';
import User from '../../assets/images/user.png';
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
      <div>
   
      </div> 
      <div className="icon-container">
      <div className="icon">
     <img src={Wishlist} />
      </div>
      <div className="icon">
     <img src={Heart} />
     
        
      </div>
      <div className="icon">
     <img src={User} />
        
      </div>
    </div>
    <div>

    </div>   
    </nav>
  );
};

export default Header;
