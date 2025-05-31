import { create } from "zustand";
import { ProductCoffe } from "../assets/datas/productCoffe";
import { SlideProduct } from "../services/SlideProduct";

type DatasProducts = ProductCoffe & SlideProduct;

interface State {
  productCart: DatasProducts[];
  isClicked: boolean;
  wishlistProducts: DatasProducts[];
}

interface Actions {
  setIsClicked: (condition: boolean) => void;
  setProductCart: (product: DatasProducts[]) => void;
  setWishlistProducts: (product: DatasProducts[]) => void;
}

const useProductCart = create<State & Actions>((set) => ({
  productCart: [],
  isClicked: false,
  wishlistProducts: [],
  setIsClicked: (condition: boolean) =>
    set((state) => ({ isClicked: (state.isClicked = condition) })),
  setProductCart: (product: DatasProducts[]) =>
    set((state) => ({ productCart: (state.productCart = product) })),
  setWishlistProducts: (product: DatasProducts[]) =>
    set((state) => ({ wishlistProducts: (state.wishlistProducts = product) })),
}));

export default useProductCart;
