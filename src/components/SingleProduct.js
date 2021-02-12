import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { getTransformedUrl } from '../Utils/Helpers';

import '../Layout/Products/styles.css';

const SingleProduct = ({ setisDialogOpen, product }) => {
  const history = useHistory();
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, false);
    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.removeEventListener('click', handleOutsideClick, false);
      document.removeEventListener('keydown', handleKeyDown, false);
    }
  }, [])

  function handleOutsideClick(event) {
    if (wrapperRef.current && wrapperRef.current == event.target) {
      history.push('/');
    }
  }

  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      history.push('/');
    }
  }

  const url = getTransformedUrl(product);

  return (
    <div 
      className='single-product' 
      ref={wrapperRef} 
      onClick={(e) => handleOutsideClick(e)}
    >
      <ProductDetails url={url} product={product} />
    </div>
  )
}

export default SingleProduct;
