import { Eye, Heart, ShoppingCart } from "@phosphor-icons/react";
import { ReactNode } from "react";
import { ProductCoffe } from "../../../assets/datas/productCoffe";
import useNotifCart from "../../../hooks/useNotifCart";
import useQuantityProduct from "../../../hooks/useQuantityProduct";

interface IconProductProps {
  product: ProductCoffe;
}

const IconProduct = (props: IconProductProps) => {
  const { product } = props;
  const stateNotifCart = useNotifCart((state) => state);
  const setQuantity = useQuantityProduct((state) => state.setQuantity);

  const oldProducts: ProductCoffe[] =
    JSON.parse(localStorage.getItem("products")!) || [];

  const handleAddToCart = (productItem: ProductCoffe) => {
    stateNotifCart.setIsClicked(true);
    const existProduct = oldProducts.find(
      (item: ProductCoffe) => item.id === productItem.id,
    );
    const updatedProducts: ProductCoffe[] = !existProduct
      ? [...oldProducts, { ...productItem, quantity: 1 }]
      : oldProducts.map((item: ProductCoffe) => {
          if (item.id === productItem.id) {
            return {
              ...item,
              quantity: item.quantity! + 1,
              price: item.price + productItem.price,
            };
          }
          return item;
        });

    const totalQuantityProduct = updatedProducts.reduce(
      (acc: number, item: ProductCoffe) => item.quantity! + acc,
      0,
    );

    setQuantity(totalQuantityProduct);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantityProduct));

    setTimeout(() => {
      stateNotifCart.setIsClicked(false);
    }, 2000);
  };
  return (
    <div className="absolute top-1/2 -mt-6 -ml-2 flex w-full -translate-y-1/2 justify-center gap-2">
      <IconProductItem icon={<Heart size={23} />} />
      <IconProductItem icon={<Eye size={23} />} />
      <IconProductItem
        icon={
          <ShoppingCart
            size={23}
            className={`${stateNotifCart.isClicked && "cursor-not-allowed"}`}
          />
        }
        isSend={stateNotifCart.isClicked}
        onClick={() => handleAddToCart(product)}
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
