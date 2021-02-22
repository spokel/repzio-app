import React from 'react';
import Thumbnail from '../../../../components/Thumbnail';

const AllProducts = ({ productsList }) => (
  <div className='products'>
    {productsList.map(product => (
      <Thumbnail 
        key={product.ProductID}
        product={product}
      />
    ))}
  </div>
)

export default AllProducts;
