// src/pages/CartPage/CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css'; // Import CartPage specific styles

// Receive cartItems, and functions to manage cart (e.g., updateQuantity, removeFromCart)
function CartPage({ cartItems, updateQuantity, removeFromCart }) {
  // Calculate total price of all items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart of Chaos</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is currently empty. Time to unleash some style!</p>
          <Link to="/products" className="shop-now-button">Explore Our Offerings</Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="cart-item-card">
                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-size">Size: {item.selectedSize || 'N/A'}</p>
                  <p className="cart-item-price">₹{item.price.toLocaleString()}</p>
                  <div className="cart-item-quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="quantity-button"
                    >
                      -
                    </button>
                    <span className="item-quantity">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      className="quantity-button"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.selectedSize)}
                  className="remove-item-button"
                >
                  <i className="fas fa-trash-alt"></i> {/* Trash icon */}
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="summary-heading">Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{calculateTotal().toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>₹0</span> {/* Assuming free shipping for now */}
            </div>
            <div className="summary-row total-row">
              <span>Total:</span>
              <span>₹{calculateTotal().toLocaleString()}</span>
            </div>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
