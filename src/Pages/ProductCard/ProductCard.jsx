    // src/components/ProductCard.jsx
    import React from 'react';
    import { Link } from 'react-router-dom';
    import './ProductCard.css'; // For ProductCard specific styles

    function ProductCard({ product }) {
      // Add a check to ensure product exists before trying to access its properties
      if (!product) {
        console.warn("ProductCard received an undefined or null product prop. Skipping render.");
        return null; // Don't render anything if the product object itself is invalid
      }

      // Destructure product properties for cleaner code.
      // Provide default empty strings or fallback values for properties that might be missing.
      const { id, imageUrl, name, price } = product;

      return (
        <Link to={`/products/${id}`} className="product-card">
          {/* Display product image, with a placeholder if imageUrl is missing or broken */}
          <img
            src={imageUrl || 'https://placehold.co/250x300/e0e0e0/000000?text=No+Image'}
            alt={name || 'Product Image'} // Fallback alt text
            className="product-card-image"
            // Optional: Add an onerror handler for broken image links
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/250x300/e0e0e0/000000?text=Image+Error"; }}
          />
          {/* Display product name, with a fallback if name is missing */}
          <h3 className="product-card-name winky">{name || 'Unnamed Product'}</h3>
          {/* Display product price. Conditionally call toLocaleString() only if price is a valid number. */}
          <p className="product-card-price winky">
            Rs. {price !== undefined && price !== null && typeof price === 'number' ? price.toLocaleString() : 'N/A'}
          </p>
          {/* Call-to-action button for quick view */}
          <button className="product-card-cta winky">Quick View</button>
        </Link>
      );
    }

    export default ProductCard;
    