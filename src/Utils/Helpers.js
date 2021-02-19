export function getTransformedUrl(product) {
  let cropValue = '';
  let widthValue = '';

  switch (product.ItemID) {
    case 'F141':
      cropValue = '?cropxunits=100&cropyunits=100&crop=10,10,-10,-10';
      break;
    case 'F31':
      cropValue = '?cropxunits=100&cropyunits=100&crop=7,7,-7,-7';
      break;
    case 'F236':
      widthValue = '?w=800&h=700&mode=pad';
      break;
    case 'F237':
      widthValue = '?w=180';
      break;
    default:
      break;
  }

  return `${product.PhotoName}${cropValue}${widthValue}`;
}

export function getFullPrice(price) {
  let fullPrice = price?.toString() || '';

  if (fullPrice.length === 3) {
    fullPrice = fullPrice.concat('.00');
  }
  else if (fullPrice.length === 5) {
    fullPrice = fullPrice.concat('0');
  }

  return fullPrice;
}