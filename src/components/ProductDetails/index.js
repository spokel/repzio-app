import React from 'react';
import { Link } from 'react-router-dom';
import { getFullPrice } from '../../Utils/Helpers';

import './styles.css';

const ProductDetails = ({ url, product }) => {
  return (
    <>
      <div className='product-link-container'>
        <Link to='/' className='product-link'>All Products</Link>
        <p className='product-name-link'>/ {product.ItemName}</p>
      </div>

      <div className='product-details-container'>
        <div className='product-image-container'> 
          <img src={url} alt={product.Description} />
        </div>

        <div className='product-details'>
          <div className='product-header'>
            <p className='product-value product-name'>{product.ItemName}</p>
            <p className='product-value product-price'>$ {getFullPrice(product.BasePrice)}</p>
            <p className='product-value product-id'>Item ID: {product.ItemID}</p>
          </div>

          <div className='product-description'>
            <p className='product-value'>{product.Description}</p>
          </div>

          <div className='product-dimensions'>
            <p>Dimensions: {product.Dimensions}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails;
