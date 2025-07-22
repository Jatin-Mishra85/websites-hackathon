import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../../Data/ProductsData';
import './ProductDetailPage.css';

function ProductDetailPage({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(''); // ✅ FIXED
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    setSelectedSize('');
    setQuantity(1);
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    if (product.sizes && !selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }

    setIsLoading(true);
    addToCart({ ...product, selectedSize, quantity });
  };

  if (!product) return <div className="loading-message">Loading product details...</div>;

  return (
    <div className="product-detail-page">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price.toLocaleString()}</p>
        <p className="description">{product.description}</p>

        {product.sizes && product.sizes.length > 0 && (
          <div className="sizes">
            <p>Select Size:</p>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="quantity">
          <p>Quantity:</p>
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={isLoading || (product.sizes && !selectedSize)}
        >
          {isLoading ? (
            <span className="loading-spinner"></span>
          ) : (
            'Add to Cart'
          )}
        </button>
        {product.sizes && !selectedSize && (
          <p className="size-warning">Please select a size.</p>
        )}
      </div>
    </div>
  );
}

export default ProductDetailPage;
