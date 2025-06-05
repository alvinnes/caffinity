import { DataMenus } from "../../assets/datas/dataMenus";
import formatPrice from "../../utils/formatPrice";

interface DescriptionMenu {
  product: DataMenus;
}

const DescriptionMenu = ({ product }: DescriptionMenu) => {
  return (
    <div className="mt-28 mb-50 flex w-full flex-col gap-8 sm:mt-0 sm:mb-0 sm:w-sm">
      <h1 className="font-fair text-5xl leading-13 font-bold text-slate-600 drop-shadow-sm sm:text-7xl sm:leading-18">
        {product.name}
      </h1>
      <p className="text-sm">{product.description}</p>
      <h3 className="font-outfit text-3xl font-bold text-slate-600 drop-shadow-sm">
        {formatPrice(product.price)}
      </h3>
      <button className="bg-coffe w-fit rounded-sm px-6 py-2 text-white shadow-lg">
        Beli Sekarang!
      </button>
    </div>
  );
};

export default DescriptionMenu;
