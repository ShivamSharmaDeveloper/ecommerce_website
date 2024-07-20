import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Exclusive</h3>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <form className="subscribe-form">
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">></button>
                    </form>
                </div>
                <div className="footer-section">
                    <h3>Support</h3>
                    <p>address</p>
                    <p>exclusive@gmail.com</p>
                    <p>+91 98765 43210</p>
                </div>
                <div className="footer-section">
                    <h3>Account</h3>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Link</h3>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="footer-section">
                    <h3>Follow us on</h3>
                    <p>f</p>
                    <p>t</p>
                    <p>i</p>
                    <p>in</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; Copyright Rimel 2022. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;