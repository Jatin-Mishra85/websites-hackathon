// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// In your src/index.js or App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartPage from "./Pages/CartPage/CartPage.jsx";
  
// import './utils/smoothScroll'
import HomePage from "./Pages/HomePage/HomePage.jsx";
import ProductsPage from "./Pages/ProductsPage/ProductsPage.jsx";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage.jsx";

import LoginPage from "./Pages/Authentication/LoginPage.jsx";
import SignupPage from "./Pages/Authentication/SignupPage.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css"; // Ensure App.css is imported for global styles or App component specific styles

function App() {
  const [cartItems, setCartItems] = useState([]); // State to hold cart items, initialized as empty array

  const addToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      // Check if item already exists in cart (same ID and selected size)
      const existingItem = prevItems.find(
        (item) =>
          item.id === productToAdd.id &&
          item.selectedSize === productToAdd.selectedSize
      );

      if (existingItem) {
        // If exists, update quantity
        return prevItems.map((item) =>
          item.id === productToAdd.id &&
          item.selectedSize === productToAdd.selectedSize
            ? { ...item, quantity: item.quantity + productToAdd.quantity }
            : item
        );
      } else {
        // If not, add new item (productToAdd already includes selectedSize and quantity from ProductDetailPage)
        return [...prevItems, { ...productToAdd }]; // Ensure you are spreading the productToAdd
      }
    });
  };
  // Inside App.jsx, add these functions
const removeFromCart = (idToRemove, sizeToRemove) => {
  setCartItems((prevItems) =>
    prevItems.filter(
      (item) => !(item.id === idToRemove && item.selectedSize === sizeToRemove)
    )
  );
};

const updateQuantity = (idToUpdate, sizeToUpdate, newQuantity) => {
  if (newQuantity < 1) { // Prevent quantity from going below 1
    removeFromCart(idToUpdate, sizeToUpdate);
    return;
  }
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === idToUpdate && item.selectedSize === sizeToUpdate
        ? { ...item, quantity: newQuantity }
        : item
    )
  );
};

  return (
    <Router>
      <Header
        cartItemCount={cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        )}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* Pass addToCart function to ProductDetailPage */}
          <Route
            path="/products/:id"
            element={<ProductDetailPage addToCart={addToCart} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add a catch-all route for 404 Not Found pages if desired */}
        <Route
  path="/cart"
  element={<CartPage cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />}
/>
  </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
