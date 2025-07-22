// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll and alias it

import './Header.css';

// Receive cartItemCount as a prop
function Header({ cartItemCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="header-top-bar">
        <div className="header-logo">
          <Link to="/" className='anton'>J<span> M</span> L</Link>
          <Link to="/" className='FForm anton'>Join <span>Monsters</span> Life</Link>
        </div>

        <nav className="main-nav">
          <ul>
            <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/products" onClick={() => setIsMenuOpen(false)}>Products</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
          </ul>
        </nav>

        <div className="header-icons">
          <button className="icon-button" onClick={toggleSearch} aria-label="Search">
            <i className="fas fa-search"></i>
          </button>
          <Link to="/login" className="icon-button" aria-label="Login / Register">
            <i className="fas fa-user"></i>
          </Link>
          <Link to="/wishlist" className="icon-button" aria-label="Wishlist">
            <i className="fas fa-heart"></i>
          </Link>
          <Link to="/cart" className="icon-button" aria-label="Shopping Cart">
            <i className="fas fa-shopping-cart"></i>
            {/* Display the cartItemCount here */}
            <span className="cart-count">{cartItemCount}</span>
          </Link>
          <button className="menu-toggle-button" onClick={toggleMenu} aria-label="Toggle Menu">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="search-overlay">
          <input type="text" placeholder="I'm looking for..." className="search-input" />
          <button className="close-search-button" onClick={toggleSearch}>X</button>
          <div className="trending-searches">
            <span>Trending:</span>
            <Link to="/products?q=t-shirt" onClick={toggleSearch}>t-shirt</Link>
            <Link to="/products?q=hoodie" onClick={toggleSearch}>hoodie</Link>
            <Link to="/products?q=crop-top" onClick={toggleSearch}>crop top</Link>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <nav className="mobile-nav-overlay">
          <button className="close-menu-button" onClick={toggleMenu}>X</button>
          <ul>
            <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to="/products" onClick={toggleMenu}>Products</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
            <li><NavLink to="/login" onClick={toggleMenu}>Login / Register</NavLink></li>
            <li><NavLink to="/wishlist" onClick={toggleMenu}>Wishlist</NavLink></li>

            <li className="mobile-nav-category">BB Merchandise</li>
            <li><NavLink to="/products?category=t-shirt" onClick={toggleMenu}>T-shirts</NavLink></li>
            <li><NavLink to="/products?category=hoodie" onClick={toggleMenu}>Hoodies</NavLink></li>
            <li><NavLink to="/products?category=cargo" onClick={toggleMenu}>Cargos</NavLink></li>
            <li className="mobile-nav-category">Raised Right</li>
            <li><NavLink to="/products?category=oversized-t-shirt" onClick={toggleMenu}>Oversized T-Shirts</NavLink></li>
            <li><NavLink to="/products?category=cargo" onClick={toggleMenu}>Cargos</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
