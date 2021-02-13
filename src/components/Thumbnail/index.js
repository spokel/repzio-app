import React from 'react';
import { useHistory } from 'react-router-dom';
import { getTransformedUrl, getFullPrice } from '../../Utils/Helpers';

import './styles.css';

const Thumbnail = ({ 
  product,
  expandProductDetails 
}) => {
  const history = useHistory();
  const url = getTransformedUrl(product);

  function handleClick() {
    expandProductDetails(product)
    history.push(`product/${product.ItemID}`)
  }

  return (
    <div 
      className='product-thumbnail'
      onClick={() => handleClick()}
      onKeyPress={(e) => {
        if (e.code === 'Enter') handleClick()
      }}
      tabIndex='0'
    >
      <div className='product-image'> 
        <img 
          src={url} 
          alt={product.Description} 
        />
      </div>
      <div className='product-info'>
        <p className='product-name'>{product.ItemName}</p>
        <p className='product-price'>$ {getFullPrice(product.BasePrice)}</p>
      </div>
    </div>
  )
}

export default Thumbnail;
