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
      className={`${customStyle} sm:shadow-coffe/50 relative h-85 w-full rounded-md bg-white p-2 shadow-none sm:m-0 sm:shadow-lg`}
    >
      <IconProduct product={product} />
      <div className="bg-secondary h-40 w-full overflow-hidden rounded-xl">
        <img
          src={product.img}
          alt={product.nama}
          className="size-full object-cover"
        />
      </div>
      <div className="flex h-40 flex-col justify-between">
        <h2 className="mt-2 w-11/12 overflow-hidden tracking-wide text-nowrap text-ellipsis text-slate-700">
          {product.nama}
        </h2>
        <p className="line-clamp-3 text-[0.8em] font-light text-ellipsis">
          {product.description}
        </p>
        <div className="flex w-full items-center justify-between">
          <h3 className="sm:text-md text-sm font-semibold text-slate-700">
            {formatPrice(product.price)}
          </h3>
          <button className="sm:text-md rounded-sm bg-[#B17457] px-6 py-2 text-sm font-semibold text-white shadow-sm sm:px-8">
            Beli
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentProducts;
