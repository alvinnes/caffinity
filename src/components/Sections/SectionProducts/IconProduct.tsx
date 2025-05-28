import { Eye, Heart, ShoppingCart } from "@phosphor-icons/react";
import { ReactNode } from "react";
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

  return (
    <div className="absolute top-1/2 -mt-6 -ml-2 flex w-full -translate-y-1/2 justify-center gap-2">
      <IconProductItem
        icon={
          <Heart
            size={23}
            className={`${stateNotifCart.isClicked && "cursor-not-allowed"} `}
          />
        }
        isSend={stateNotifCart.isClicked}
        onClick={() => addWiselist(product)}
      />
      <IconProductItem icon={<Eye size={23} />} />
      <IconProductItem
        icon={
          <ShoppingCart
            size={23}
            className={`${stateNotifCart.isClicked && "cursor-not-allowed"}`}
          />
        }
        isSend={stateNotifCart.isClicked}
        onClick={() => addToCart(product)}
      />
    </div>
  );
};

interface IconProductItemProps {
  icon: ReactNode;
  onClick?: React.MouseEventHandler;
  isSend?: boolean;
}

const IconProductItem = (props: IconProductItemProps) => {
  const { icon, onClick, isSend } = props;
  return (
    <button
      onClick={onClick}
      disabled={isSend}
      className="flex size-6.5 cursor-pointer items-center justify-center rounded-full bg-slate-700 p-1 text-white shadow-sm"
    >
      {icon}
    </button>
  );
};

export default IconProduct;
