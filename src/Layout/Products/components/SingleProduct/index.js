import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ProductDetails from '../../../../components/ProductDetails';
import { getTransformedUrl } from '../../../../Utils/Helpers';

import './styles.css';

const SingleProduct = ({ product: initialProduct, data }) => {
  const [product, setProduct] = useState(initialProduct);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (!product) {
      const currentProduct = data.items.find(p => p.ItemID === id);
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

  const url = getTransformedUrl(product);

  return (
    <div className='single-product'>
      <ProductDetails url={url} product={product} />
    </div>
  )
}

export default SingleProduct;
