import React, { useRef, useEffect } from 'react';
import ProductDetailsFooter from './ProductDetailsFooter';
import ProductDetails from './ProductDetails';
import { getCroppedImageUrl } from '../Utils/Helpers';

import '../Layout/Products/styles.css';

const ProductDialog = ({ isOpen, setisDialogOpen, product }) => {
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
      setisDialogOpen(false);
    }
  }

  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      setisDialogOpen(false);
    }
  }

  if (isOpen) {
    const url = getCroppedImageUrl(product);

    return (
      <div 
        className='dialog-wrapper' 
        ref={wrapperRef} 
        onClick={(e) => handleOutsideClick(e)}
      >
        <div className='dialog-container'>
          <ProductDetails url={url} product={product} />
          <ProductDetailsFooter />
        </div>
      </div>
    )
  }

  return null;
}

export default ProductDialog;
