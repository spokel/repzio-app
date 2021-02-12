import React from 'react';
import Thumbnail from '../../../../components/Thumbnail';

const AllProducts = ({ data, expandProductDetails }) => {
  return data && data.items.map(product => (
    <Thumbnail 
      key={product.ProductID}
      product={product} 
      width='110'
      expandProductDetails={expandProductDetails}
    />
  ))
}

export default AllProducts;
