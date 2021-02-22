import React from 'react';
import { Switch, Route } from 'react-router-dom';
import data from '../../constants/data.json';
import SingleProduct from './components/SingleProduct';
import Header from './components/Header';
import AllProducts from './components/AllProducts';

import './styles.css';

const Products = () => {
  return (
    <main id='main-content'>
      <div className='products-container'>
        <Header />

          <Switch>
            <Route 
              exact
              path='/' 
              render={() => 
                <AllProducts productsList={data.items} />
              } 
            />
            <Route 
              exact
              path='/product/:id'
              render={() => 
                <SingleProduct productsList={data.items} />
              } 
            />
          </Switch>

      </div>
    </main>
  )
}

export default Products;
