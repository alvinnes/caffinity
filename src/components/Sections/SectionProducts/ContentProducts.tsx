import { ProductCoffe } from "../../../assets/datas/productCoffe";
import formatPrice from "../../../utils/formatPrice";
import IconProduct from "./IconProduct";

interface ContentProductsProps {
  product: ProductCoffe;
}

const ContentProducts = (props: ContentProductsProps) => {
  const { product } = props;
  return (
    <div className="relative m-1 h-70 rounded-md bg-white shadow-sm sm:m-0">
      <IconProduct />
      <div className="h-40 w-full rounded-sm bg-slate-100/50">
        <img
          src={product.img}
          alt={product.nama}
          className="size-full object-cover"
        />
      </div>
      <div className="flex h-30 flex-col justify-between p-2">
        <h2 className="ml-1 tracking-wide text-slate-700">{product.nama}</h2>
        <h3 className="ml-1 text-sm">{formatPrice(product.price)}</h3>
        <button className="w-full rounded-sm bg-slate-100 py-1.5">
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default ContentProducts;
