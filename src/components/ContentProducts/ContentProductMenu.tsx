import { Link } from "react-router";
import { ProductCoffe } from "../../assets/datas/productCoffe";
import formatPrice from "../../utils/formatPrice";

interface ContentProductMenuProps {
  item: ProductCoffe;
}

const ContentProductMenu = (props: ContentProductMenuProps) => {
  const { item } = props;
  return (
    <Link to={`/`}>
      <div className="flex items-center justify-between rounded-md bg-white px-2 py-3 shadow-sm transition-all duration-400 hover:scale-97 sm:w-11/12 sm:px-8">
        <div className="size-14 rounded-full bg-slate-100 p-1">
          <img
            src={item.img}
            alt={item.nama}
            className="size-full rounded-full bg-amber-400 object-cover"
          />
        </div>
        <div className="ml-4 w-70 sm:w-sm">
          <div className="flex items-center justify-between border-b-1 border-dashed border-slate-600 pb-1">
            <h2 className="w-42 overflow-hidden text-left font-semibold text-nowrap text-ellipsis text-amber-900">
              {item.nama}
            </h2>
            <p className="text-sm font-semibold text-amber-800">
              {formatPrice(item.price)}
            </p>
          </div>
          <p className="mt-1 line-clamp-2 text-left text-[0.8em] font-light text-ellipsis">
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ContentProductMenu;
