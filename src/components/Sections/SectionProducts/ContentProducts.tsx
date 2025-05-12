import { ProductCoffe } from "../../../assets/datas/productCoffe";
import formatPrice from "../../../utils/formatPrice";
import IconProduct from "./IconProduct";

interface ContentProductsProps {
  product: ProductCoffe;
  customStyle?: string;
}

const ContentProducts = (props: ContentProductsProps) => {
  const { product, customStyle } = props;
  return (
    <div
      className={`${customStyle} relative h-70 w-9/12 rounded-md bg-white shadow-none sm:m-0 sm:w-full sm:shadow-sm`}
    >
      <IconProduct />
      <div className="h-40 w-full rounded-sm bg-slate-100/50">
        <img
          src={product.img}
          alt={product.nama}
          className="bg-secondary/50 size-full object-cover"
        />
      </div>
      <div className="flex h-30 flex-col justify-between p-2">
        <h2 className="ml-1 w-11/12 overflow-hidden tracking-wide text-nowrap text-ellipsis text-slate-700">
          {product.nama}
        </h2>
        <h3 className="-mt-2 ml-1 font-semibold text-slate-700">
          {formatPrice(product.price)}
        </h3>
        <button className="w-full rounded-sm bg-[#B17457] py-1.5 font-semibold text-white">
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default ContentProducts;
