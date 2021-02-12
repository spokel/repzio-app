import React from 'react';

import './styles.css';

const ProductDetails = ({ url, product }) => {
  return (
    <>
      <div className='product-link-container'>
        <p className='product-link'>All Products</p>
        <p className='product-name-link'>/ {product.ItemName}</p>
      </div>

      <div className='product-image-container'> 
        <img src={url} alt={product.Description} />
      </div>

      <div className='product-header'>
        <p className='product-value product-name'>{product.ItemName}</p>
        <p className='product-value product-price'>$ {product.BasePrice}</p>
        <p className='product-value product-id'>Item ID: {product.ItemID}</p>
      </div>

      <div className='product-description'>
        <p className='product-value'>{product.Description}</p>
      </div>

      <div className='product-dimensions'>
        <p>Dimensions: </p>
        <p>{product.Dimensions}</p>
      </div>
    </>
  )
}

export default ProductDetails;
