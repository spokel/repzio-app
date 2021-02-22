import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ProductDetails from '../../../../components/ProductDetails';
import { getTransformedUrl } from '../../../../Utils/Helpers';

import './styles.css';

const SingleProduct = ({ productsList }) => {
  const [product, setProduct] = useState();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const currentProduct = productsList.find(p => p.ItemID === id);
      setProduct(currentProduct);
    }
  }, [])

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

  const url = product && getTransformedUrl(product);

  return (
    <div className='single-product'>
      <ProductDetails url={url} product={product} />
    </div>
  )
}

export default SingleProduct;
