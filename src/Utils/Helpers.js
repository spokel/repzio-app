export function getCroppedImageUrl(product) {
  let cropValue = '';

  if (product.ItemID === 'F141') {
    cropValue = '?cropxunits=100&cropyunits=100&crop=10,10,-10,-10';
  }
  else if (product.ItemID === 'F31') {
    cropValue = '?cropxunits=100&cropyunits=100&crop=7,7,-7,-7';
  }

  return `${product.PhotoName}?width=180${cropValue}`;
}