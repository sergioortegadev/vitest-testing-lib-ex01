const changeOrderByPriceUp = (products) => {
  const sordedProducts = [...products].sort((a, b) => a.price - b.price);
  return sordedProducts;
};
const changeOrderByPriceDown = (products) => {
  const sordedProducts = [...products].sort((a, b) => b.price - a.price);
  return sordedProducts;
};

export { changeOrderByPriceUp, changeOrderByPriceDown };
