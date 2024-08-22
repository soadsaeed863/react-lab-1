// src/ProductList.js
import React from 'react';
import { useFetch } from './useFetch';
 // Import the useFetch hook

function ProductList() {
  // Fetch products from the API using the useFetch hook
  const { data: products, loading, error } = useFetch('http://localhost:3001/products');

  // Handle the loading state
  if (loading) {
    return <div>Loading...</div>; // Display a loading spinner or message
  }

  // Handle the error state
  if (error) {
    return <div>Error: {error}</div>; // Display an error message
  }

  // Organize products by category
  const categories = products.reduce((acc, product) => {
    const { product_category } = product;
    if (!acc[product_category]) {
      acc[product_category] = [];
    }
    acc[product_category].push(product);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          {categories[category].map(product => (
            <div key={product.product_id}>
              <h3>{product.product_name}</h3>
              <p>{product.product_desc}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
