import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductDetails from '../../../../components/ProductDetails';
import { getTransformedUrl } from '../../../../Utils/Helpers';

import './styles.css';

const SingleProduct = ({ product }) => {
  const history = useHistory();

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    }
  }, [])

  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      history.push('/');
    }
  }

  const url = getTransformedUrl(product);

  return (
    <div className='single-product'>
      <ProductDetails url={url} product={product} />
    </div>
  )
}

export default SingleProduct;
