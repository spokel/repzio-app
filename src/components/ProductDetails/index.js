import React from 'react';
import { Link } from 'react-router-dom';
import { getFullPrice } from '../../Utils/Helpers';

import './styles.css';

const ProductDetails = ({ url, product = {} }) => {
  return (
    <div className='product-details-container'>

      <div className='product-image-container'>
        <div className='product-link-container'>
          <Link to='/' className='product-link'>All Products</Link>
          <p className='product-name-link'>/ {product.ItemName}</p>
        </div>

        <div className='product-image'> 
          <img src={url} alt={product.Description} />
        </div>
      </div>

      <div className='product-details'>
        <div className='product-header'>
          <p className='product-name'>{product.ItemName}</p>
          <p className='product-price'>$ {getFullPrice(product.BasePrice)}</p>
          <p className='product-id'>Item ID: {product.ItemID}</p>
        </div>

        <div className='product-description'>
          <p>{product.Description}</p>
        </div>

        <div className='product-dimensions'>
          <p>Dimensions: {product.Dimensions}</p>
        </div>
      </div>
      
    </div>
  )
}

export default ProductDetails;
