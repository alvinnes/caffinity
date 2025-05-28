import { create } from "zustand";

interface State {
  quantity: number;
  quantityWiselist: number;
  setQuantityWiselist: (qty: number) => void;
  setQuantity: (qty: number) => void;
}

const useQuantityProduct = create<State>((set) => ({
  quantity: 0,
  quantityWiselist: 0,
  setQuantity: (qty: number) =>
    set((state) => ({ quantity: (state.quantity = qty) })),
  setQuantityWiselist: (qty: number) =>
    set((state) => ({ quantityWiselist: (state.quantityWiselist = qty) })),
}));

export default useQuantityProduct;
