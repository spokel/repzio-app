import React from 'react';
import { getCroppedImageUrl } from '../../Utils/Helpers';
import './styles.css';

const Thumbnail = ({ 
  product,
  width, 
  expandProductDetails 
}) => {
  const cropValue = getCroppedImageUrl(product);

  return (
    <div 
      className='product-thumbnail'
      onClick={() => expandProductDetails(product)}
      onKeyPress={(e) => {
        if (e.code === 'Enter') expandProductDetails(product)
      }}
      tabIndex='0'
    >
      <div>{product.ItemName}</div>
      <img 
        src={`${product.PhotoName}?width=${width}${cropValue}`} 
        alt={product.Description} 
      />
    </div>
  )
}

export default Thumbnail;
