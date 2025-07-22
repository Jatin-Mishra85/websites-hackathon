// src/pages/ProductsPage.jsx
import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx"; // Corrected import path
import { allProducts } from "../../Data/ProductsData.js"; // Import centralized data
import "./ProductsPage.css"; // For ProductsPage specific styles

function ProductsPage() {
  const [filter, setFilter] = useState("all");

  const filteredProducts = allProducts.filter((product) => {
    if (filter === "all") return true;
    return product.category === filter;
  });

  return (
    <div className="products-page">
      <h1>Our Offerings</h1>
      <div className="product-filters">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all"? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("t-shirt")}
          className={filter === "t-shirt"? "active" : ""}
        >
          T-Shirts
        </button>
        <button
          onClick={() => setFilter("bottom")}
          className={filter === "bottom"? "active" : ""}
        >
          Bottoms
        </button>
        <button
          onClick={() => setFilter("hoodie")}
          className={filter === "hoodie"? "active" : ""}
        >
          Hoodies
        </button>
        <button
          onClick={() => setFilter("crop-top")}
          className={filter === "crop-top"? "active" : ""}
        >
          Crop Tops
        </button>
        <button
          onClick={() => setFilter("shirt")}
          className={filter === "shirt"? "active" : ""}
        >
          Shirts
        </button>
        <button
          onClick={() => setFilter("jacket")}
          className={filter === "jacket"? "active" : ""}
        >
          Jackets
        </button>
        <button
          onClick={() => setFilter("sweater")} // Added sweater filter
          className={filter === "sweater"? "active" : ""}
        >
          Sweaters
        </button>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;