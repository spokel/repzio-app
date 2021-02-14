import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import data from '../../constants/data.json';
import SingleProduct from './components/SingleProduct';
import Header from './components/Header';
import AllProducts from './components/AllProducts';

import './styles.css';

const Products = () => {
  const [expandedProduct, setExpandedProduct] = useState('');

  function expandProductDetails(selectedProduct) {
    setExpandedProduct(selectedProduct);
  }

  return (
    <main id='main-content'>
      <div className='products-container'>
        <Header />

          <Switch>
            <Route 
              exact
              path='/' 
              render={() => 
                <AllProducts
                  data={data} 
                  expandProductDetails={expandProductDetails}
                />} 
            />
            <Route 
              exact
              path='/product/:id'
              render={() => 
                <SingleProduct 
                  product={expandedProduct} 
                />} 
            />
          </Switch>

      </div>
    </main>
  )
}

export default Products;
