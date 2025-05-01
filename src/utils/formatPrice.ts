const formatPrice = (price: number) => {
  const formater = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
  return formater;
};

export default formatPrice;
