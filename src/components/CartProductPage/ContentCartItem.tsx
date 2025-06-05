import { Fragment } from "react/jsx-runtime";
import { ProductCoffe } from "../../assets/datas/productCoffe";
import { SlideProduct } from "../../services/SlideProduct";
import { ShoppingCart } from "@phosphor-icons/react";
import DescriptionProductCart from "./DescriptionProductCart";

type DatasProducts = ProductCoffe & SlideProduct;

interface ContentCartItemProps {
  productCart: DatasProducts[];
}
const ContentCartItem = ({ productCart }: ContentCartItemProps) => {
  return (
    <Fragment>
      {productCart.length < 1 && (
        <p className="absolute top-1/2 left-1/2 flex -translate-1/2 flex-col items-center gap-4 text-center text-2xl font-bold text-slate-600">
          <ShoppingCart size={80} /> Keranjang Masih Kosong
        </p>
      )}
      {productCart.map((product: DatasProducts) => (
        <div
          key={product.id}
          className="bg-secondary/30 relative mb-6 flex w-full items-center gap-8 rounded-xl px-6 py-2 shadow-sm backdrop-blur-lg"
        >
          <div className="size-16 rounded-full bg-white p-1 shadow-sm">
            <img
              src={product.img}
              alt={product.nama}
              className="bg-secondary size-full rounded-full"
            />
          </div>
          <DescriptionProductCart product={product} />
        </div>
      ))}
    </Fragment>
  );
};

export default ContentCartItem;
