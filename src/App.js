import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Layout/Header';
import Products from './Layout/Products';
import Footer from './Layout/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className='wrapper'>
        <Header />
        <Products />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
