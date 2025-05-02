const formatPrice = (price: number): string => {
  const formater = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
  return formater;
};

export default formatPrice;
