import React, { useState } from 'react';
import data from '../../constants/data.json';
import ProductDialog from '../../components/ProductDialog';
import Thumbnail from '../../components/Thumbnail';

import './styles.css';

const Products = () => {
  const [isDialogOpen, setisDialogOpen] = useState(false);
  const [expandedProduct, setExpandedProduct] = useState('');

  function expandProductDetails(selectedProduct) {
    setisDialogOpen(true);
    setExpandedProduct(selectedProduct);
  }

  const getProducts = () => (
    data && data.items.map(product => (
      <Thumbnail 
        key={product.ProductID}
        product={product} 
        width='110'
        expandProductDetails={expandProductDetails}
      />
    ))
  )

  return (
    <main id='main-content'>
      <div className='products-container'>
        <div className='products-header'>
          <h1>Products</h1>
        </div>
        <div className='products'>
          {getProducts()}
        </div>

        <ProductDialog 
          isOpen={isDialogOpen}
          setisDialogOpen={setisDialogOpen}
          product={expandedProduct}
        />
      </div>
    </main>
  )
}

export default Products;
