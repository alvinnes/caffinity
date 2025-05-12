import { ShoppingCart } from "@phosphor-icons/react";
import { SlideProduct } from "../../services/SlideProduct";
import PrimaryButton from "../UI/PrimaryButton";
import formatPrice from "../../utils/formatPrice";

type ContentProduct = {
  product: SlideProduct;
};

const ContentProductHome = ({ product }: ContentProduct) => {
  return (
    <>
      <img
        src={product.img}
        alt="product_diskon"
        className="mx-auto h-100 w-95 object-cover"
      />
      <div className="flex w-full items-center justify-center gap-4 text-white">
        <PriceProduct
          price={product.disconPrice}
          additionalStyle="line-through text-slate-400"
        />
        <PriceProduct price={product.price} />
      </div>
      <PrimaryButton
        text="Masukkan Keranjang"
        customStyle="bg-[#B17457] rounded-full font-semibold mb-13 mt-4"
        link="#product"
        icon={<ShoppingCart size={20} />}
      />
    </>
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

export default ContentProductHome;
