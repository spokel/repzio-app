import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/repzio-logo.jpg';

import './styles.css';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <img src={logo} className='logo' alt='repzio logo' />
      </div>
      <div className='header-info-right'>
        <h1>RepZio</h1>
        <div className='header-cart-container'> 
          <div className='header-cart'>
            <FontAwesomeIcon icon='cart-plus' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
