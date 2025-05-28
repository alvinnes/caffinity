import formatPrice from "../utils/formatPrice";

interface PriceProductProps {
  price: number;
  additionalStyle?: string;
}

const PriceProduct = (props: PriceProductProps) => {
  const { price, additionalStyle } = props;
  return (
    <p className={`${additionalStyle} text-md font-semibold sm:text-lg`}>
      {formatPrice(price)}
    </p>
  );
};

export default PriceProduct;
