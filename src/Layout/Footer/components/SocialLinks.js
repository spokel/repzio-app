import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLinks = () => {
  return (
    <div className='social'>
      <a href="#">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={['fab', 'facebook']} />
      </a>
    </div>
  )
}

export default SocialLinks;
