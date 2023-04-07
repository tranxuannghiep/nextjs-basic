export function formatPrice(price: number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

export function formatPriceToK(price: number) {
  const formattedNumber = price / 1000;
  return formattedNumber.toFixed(3).replace(/\.000/, '') + 'K';
}
