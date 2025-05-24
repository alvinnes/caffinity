import { Star } from "@phosphor-icons/react";
import PrimaryButton from "../UI/PrimaryButton";
import { SlideHeaderProduct } from "../../services/SlideHeaderProduct";
import formatPrice from "../../utils/formatPrice";

interface ContentHeaderProductsProps {
  product: SlideHeaderProduct;
}

const ContentHeaderProducts = ({ product }: ContentHeaderProductsProps) => {
  return (
    <div className="absolute top-1/2 left-0 flex w-2xl -translate-y-1/2 items-center gap-4 text-white sm:left-10 sm:gap-8">
      <img
        src={product.img}
        alt=""
        className="size-43 rounded-2xl border-2 border-solid border-white bg-white/30 object-cover backdrop-blur-xs sm:size-65"
      />
      <div className="flex flex-col gap-3 sm:gap-4">
        <h2 className="text-2xl font-semibold sm:text-4xl">{product.name}</h2>
        <div className="flex items-center gap-1">
          <Star size={15} className="text-orange-300" weight="fill" />
          <Star size={15} className="text-orange-300" weight="fill" />
          <Star size={15} className="text-orange-300" weight="fill" />
          <Star size={15} className="text-orange-300" weight="fill" />
          <Star size={15} className="text-orange-300" weight="fill" />
          <p className="font-outfit ml-2 text-sm">{product.rating}</p>
        </div>
        <div className="flex gap-4">
          <PriceProduct
            price={product.disconPrice}
            additionalStyle="line-through"
          />
          <PriceProduct price={product.price} />
        </div>
        <div className="flex gap-4">
          <PrimaryButton
            text="Lihat Sekarang"
            link="/products"
            customStyle="bg-coffe rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

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

export default ContentHeaderProducts;
