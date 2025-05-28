import { ProductCoffe } from "../assets/datas/productCoffe";
import useNotifCart from "./useNotifCart";
import useQuantityProduct from "./useQuantityProduct";

const useAddToCart = () => {
  const stateNotifCart = useNotifCart((state) => state);
  const setQuantity = useQuantityProduct((state) => state.setQuantity);

  const handleAddToCart = (productItem: ProductCoffe) => {
    const oldProducts: ProductCoffe[] =
      JSON.parse(localStorage.getItem("products")!) || [];

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
  return handleAddToCart;
};

export default useAddToCart;
