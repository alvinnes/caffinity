import { ProductCoffe } from "../assets/datas/productCoffe";
import useNotifCart from "./useNotifCart";
import useQuantityProduct from "./useQuantityProduct";

const useAddToWiselist = () => {
  const setIsClickedWiselist = useNotifCart(
    (state) => state.setIsClickedWiselist,
  );
  const setIsSuccesAddWishlist = useNotifCart(
    (state) => state.setIsSuccesAddWishlist,
  );
  const setQuantityWiselist = useQuantityProduct(
    (state) => state.setQuantityWiselist,
  );

  const handleAddWhislist = (productItem: ProductCoffe) => {
    const oldDataWiselist =
      JSON.parse(localStorage.getItem("whislists")!) || [];

    const existProductWiselist = oldDataWiselist.find(
      (product: ProductCoffe) => product.id == productItem.id,
    );
    if (!existProductWiselist) {
      const newDatas = [...oldDataWiselist, { ...productItem, quantity: 1 }];
      localStorage.setItem("whislists", JSON.stringify(newDatas));
      const totalQuantityWiselist = oldDataWiselist.reduce(
        (acc: number, item: ProductCoffe) => item.quantity! + acc,
        1,
      );
      setQuantityWiselist(totalQuantityWiselist);
      localStorage.setItem(
        "totalWiselist",
        JSON.stringify(totalQuantityWiselist),
      );
      setIsSuccesAddWishlist(true);
      setTimeout(() => {
        setIsSuccesAddWishlist(false);
      }, 2000);
    } else {
      setIsClickedWiselist(true);

      setTimeout(() => {
        setIsClickedWiselist(false);
      }, 2000);
    }
  };
  return handleAddWhislist;
};

export default useAddToWiselist;
