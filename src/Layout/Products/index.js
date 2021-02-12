import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import data from '../../constants/data.json';
import SingleProduct from '../../components/SingleProduct';
import Thumbnail from '../../components/Thumbnail';
import Header from './components/Header';
import AllProducts from './components/AllProducts';

import './styles.css';

const Products = () => {
  const [isDialogOpen, setisDialogOpen] = useState(false);
  const [expandedProduct, setExpandedProduct] = useState('');

  function expandProductDetails(selectedProduct) {
    setisDialogOpen(true);
    setExpandedProduct(selectedProduct);
  }

  return (
    <main id='main-content'>
      <div className='products-container'>
        <Header />

        <div className='products'>
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
                  setisDialogOpen={setisDialogOpen}
                />
              } 
            />
          </Switch>
        </div>

      </div>
    </main>
  )
}

export default Products;
