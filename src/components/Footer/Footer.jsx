// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section footer-contact">
          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:support@youthiapa.com">support@youthiapa.com</a></p>
          {/* Add other contact details if available */}
        </div>

        <div className="footer-section footer-menu">
          <h3>Menu</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login / Register</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            {/* Add more menu links as per Youthiapa.com structure */}
            <li><Link to="/products?category=bb-merchandise">BB Merchandise</Link></li>
            <li><Link to="/products?category=raised-right">Raised Right</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-links">
          <h3>Links</h3>
          <ul>
            <li><Link to="/track-order">Track Order</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          {/* Optional: Newsletter signup in footer */}
          <div className="footer-newsletter">
            <h4>Never Miss an Update!</h4>
            <form>
              <input type="email" placeholder="Your Email Address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}, Youthiapa Clone. Developed by.</p>
      </div>
    </footer>
  );
}

export default Footer;