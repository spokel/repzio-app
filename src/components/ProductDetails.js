import React from 'react'

const ProductDetails = ({ url, product }) => {
  return (
    <div className='product-information'>
      <div className='product-info-header'>
        <div>
          <p className='product-value product-name'>{product.ItemName}</p>
          <p className='product-value product-id'>ID: {product.ItemID}</p>
        </div>
        <p className='product-value product-price'>${product.BasePrice}</p>
      </div>

      <div className='product-image-container'> 
        <img src={url} alt={product.Description} />
      </div>

      <div className='product-spec'>
        <p className='product-key'>Dimensions</p>
        <p className='product-value'>{product.Dimensions}</p>
      </div>

      <div className='product-spec'>
        <p className='product-key'>About this product</p>
        <p className='product-value'>{product.Description}</p>
      </div>
    </div>
  )
}

export default ProductDetails;
