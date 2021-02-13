import React from 'react';
import Thumbnail from '../../../../components/Thumbnail';

const AllProducts = ({ data, expandProductDetails }) => (
  <div className='products'>
    {data && data.items.map(product => (
      <Thumbnail 
        key={product.ProductID}
        product={product}
        expandProductDetails={expandProductDetails}
      />
    ))}
  </div>
)

export default AllProducts;
