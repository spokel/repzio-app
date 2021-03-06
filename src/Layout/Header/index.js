import React from 'react';
import logo from '../../assets/repzio-logo.jpg';

import './styles.css';

const Header = () => (
  <section className='header'>
    <div>
      <img src={logo} className='logo' alt='repzio logo' />
    </div>
    <div className='header-rep-info'>
      <p>Max Fraser - Max@repzio.com</p>
    </div>
  </section>
)

export default Header;
