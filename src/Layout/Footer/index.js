import React from 'react';
import SocialLinks from './components/SocialLinks';

import './styles.css';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-content'>
        <SocialLinks />
        <p>Copyright 2021 RepZio</p>
      </div>
    </section>
  )
}

export default Footer;
