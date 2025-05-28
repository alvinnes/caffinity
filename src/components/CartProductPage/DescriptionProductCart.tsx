import { ProductCoffe } from "../../assets/datas/productCoffe";
import { SlideProduct } from "../../services/SlideProduct";
import PriceProduct from "../PriceProduct";
import BtnControlQuantity from "./BtnControlQuantity";

interface DescriptionProductCartProps {
  product: ProductCoffe & SlideProduct;
}

const DescriptionProductCart = (props: DescriptionProductCartProps) => {
  const { product } = props;
  return (
    <div className="flex flex-col gap-2">
      <h2 className="w-[12ch] overflow-hidden text-lg font-semibold text-nowrap text-ellipsis text-slate-600 sm:w-auto">
        {product.nama}
      </h2>
      <div className="flex gap-4 text-slate-600">
        <PriceProduct
          price={product.disconPrice}
          additionalStyle={`${product.disconPrice ? "text-coffe line-through" : "hidden"} `}
        />
        <PriceProduct price={product.price} />
      </div>
      <BtnControlQuantity product={product} />
    </div>
  );
};

export default DescriptionProductCart;
