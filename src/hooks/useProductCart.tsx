import { create } from "zustand";
import { ProductCoffe } from "../assets/datas/productCoffe";
import { SlideProduct } from "../services/SlideProduct";

type DatasProducts = ProductCoffe & SlideProduct;

interface State {
  productCart: DatasProducts[];
  setProductCart: (product: DatasProducts[]) => void;
  isClicked: boolean;
  setIsClicked: (condition: boolean) => void;
}

const useProductCart = create<State>((set) => ({
  productCart: [],
  isClicked: false,
  setProductCart: (product: DatasProducts[]) =>
    set((state) => ({ productCart: (state.productCart = product) })),
  setIsClicked: (condition: boolean) =>
    set((state) => ({ isClicked: (state.isClicked = condition) })),
}));

export default useProductCart;
