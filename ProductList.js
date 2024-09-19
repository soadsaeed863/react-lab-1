import React from 'react';
import products from './products';
import { useHistory } from 'react-router-dom';

const ProductList = () => {
  const history = useHistory();

  const handleProductClick = (productId) => {
    history.push(`/product/${productId}`);
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id} onClick={() => handleProductClick(product.id)} style={{border: '1px solid black', padding: '10px', margin: '10px', cursor: 'pointer'}}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <img src={product.imageUrl} alt={product.name} style={{width: '100px'}} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
