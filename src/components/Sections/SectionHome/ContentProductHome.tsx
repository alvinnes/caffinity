import { ShoppingCart } from "@phosphor-icons/react";
import { SlideProduct } from "../../../services/SlideProduct";
import useNotifCart from "../../../hooks/useNotifCart";
import useQuantityProduct from "../../../hooks/useQuantityProduct";
import PriceProduct from "../../PriceProduct";

type ContentProduct = {
  product: SlideProduct;
};

const ContentProductHome = ({ product }: ContentProduct) => {
  const stateNotifCart = useNotifCart((state) => state);
  const setQuantity = useQuantityProduct((state) => state.setQuantity);

  const oldProducts: SlideProduct[] =
    JSON.parse(localStorage.getItem("products")!) || [];

  const addToCart = (productItem: SlideProduct) => {
    stateNotifCart.setIsClicked(true);
    const existProduct = oldProducts.find(
      (item: SlideProduct) => item.id === productItem.id,
    );

    const updatedProducts: SlideProduct[] = !existProduct
      ? [...oldProducts, { ...productItem, quantity: 1 }]
      : oldProducts.map((item: SlideProduct) => {
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
      (acc: number, item: SlideProduct) => item.quantity! + acc,
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
    <>
      <img
        src={product.img}
        alt="product_diskon"
        className="mx-auto h-100 w-95 object-cover"
      />
      <div className="flex w-full items-center justify-center gap-4 text-white">
        <PriceProduct
          price={product.disconPrice}
          additionalStyle="line-through text-slate-400"
        />
        <PriceProduct price={product.price} />
      </div>

      <button
        disabled={stateNotifCart.isClicked}
        onClick={() => addToCart(product)}
        className={`${stateNotifCart.isClicked ? "cursor-not-allowed" : "cursor-pointer"} mx-auto mt-4 mb-13 flex items-center gap-2 rounded-full bg-[#B17457] px-4 py-2.5 font-semibold text-white shadow-sm`}
      >
        <ShoppingCart size={20} />
        Masukkan Keranjang
      </button>
    </>
  );
};

export default ContentProductHome;
