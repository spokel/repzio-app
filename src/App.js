import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faBars, faUserCircle, faShoppingBag, faHeart, faCartPlus 
} from '@fortawesome/free-solid-svg-icons';

import Header from './Layout/Header';
import Products from './Layout/Products';
import Footer from './Layout/Footer';

import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Products />
      <Footer />
    </div>
  )
}

library.add(fab, faBars, faUserCircle, faShoppingBag, faHeart, faCartPlus);

export default App;
