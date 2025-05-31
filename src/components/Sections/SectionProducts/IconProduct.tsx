import { Eye, Heart, ShoppingCart } from "@phosphor-icons/react";
import { Fragment, ReactNode } from "react";
import { ProductCoffe } from "../../../assets/datas/productCoffe";
import useNotifCart from "../../../hooks/useNotifCart";
import useAddToCart from "../../../hooks/useAddToCart";
import useAddToWiselist from "../../../hooks/useAddToWiselist";

interface IconProductProps {
  product: ProductCoffe;
}

const IconProduct = (props: IconProductProps) => {
  const { product } = props;
  const addToCart = useAddToCart();
  const addWiselist = useAddToWiselist();
  const stateNotifCart = useNotifCart((state) => state);
  const isSuccesAddWishlist = useNotifCart(
    (state) => state.isSuccesAddWishlist,
  );

  return (
    <div className="absolute top-1/2 -mt-6 -ml-2 flex w-full -translate-y-1/2 justify-center gap-2">
      <IconProductItem
        icon={
          <Heart
            size={23}
            className={`${isSuccesAddWishlist && "cursor-not-allowed"} `}
          />
        }
        isSend={isSuccesAddWishlist}
        onClick={() => addWiselist(product)}
        text="Masukkan Wishlist"
      />
      <IconProductItem icon={<Eye size={23} />} text="Detail Product" />
      <IconProductItem
        icon={
          <ShoppingCart
            size={23}
            className={`${stateNotifCart.isClicked && "cursor-not-allowed"} `}
          />
        }
        isSend={stateNotifCart.isClicked}
        onClick={() => addToCart(product)}
        text="Masukkan Keranjang"
      />
    </div>
  );
};

interface IconProductItemProps {
  icon: ReactNode;
  onClick?: React.MouseEventHandler;
  isSend?: boolean;
  text: string;
}

const IconProductItem = (props: IconProductItemProps) => {
  const { icon, onClick, isSend, text } = props;
  return (
    <Fragment>
      <button
        onClick={onClick}
        disabled={isSend}
        className="bg-coffe group relative flex size-6.5 cursor-pointer items-center justify-center rounded-full p-1 text-white shadow-sm"
      >
        {icon}
        <div className="ease absolute -top-16.5 scale-80 bg-slate-700 p-2.5 text-sm text-nowrap text-white opacity-0 shadow-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
          {text}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 border-t-18 border-r-14 border-l-14 border-solid border-t-slate-600 border-r-transparent border-l-transparent"></span>
        </div>
      </button>
    </Fragment>
  );
};

export default IconProduct;
