import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../Layout/Products/styles.css';

const ProductDetailsFooter = () => (
  <div className='product-info-footer'>
    <div className='product-cart-button'>
      <FontAwesomeIcon icon='shopping-bag' />
      <p>Add to cart</p>
    </div>
    <div className='product-heart-button'>
      <FontAwesomeIcon icon='heart' />
    </div>
  </div>
)

export default ProductDetailsFooter;
