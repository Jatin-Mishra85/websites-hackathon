import React from 'react';
import './FeaturedProducts.css';

function FeaturedProducts({ products }) {
  return (
    <div className="featured-products">
      {products.map(product => (
        <div key={product.id} className="Feature-product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProducts;


