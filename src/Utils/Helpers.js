export function getTransformedUrl(product) {
  let cropValue = '';
  let widthValue = '';

  if (product.ItemID === 'F141') {
    cropValue = '?cropxunits=100&cropyunits=100&crop=10,10,-10,-10';
  }
  else if (product.ItemID === 'F31') {
    cropValue = '?cropxunits=100&cropyunits=100&crop=7,7,-7,-7';
  }
  else if (product.ItemID === 'F237') {
    widthValue = '?w=180';
  }

  return `${product.PhotoName}${cropValue}${widthValue}`;
}