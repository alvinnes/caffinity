import { create } from "zustand";

interface State {
  quantity: number;
  setQuantity: (qty: number) => void;
}

const useQuantityProduct = create<State>((set) => ({
  quantity: 0,
  setQuantity: (qty: number) =>
    set((state) => ({ quantity: (state.quantity = qty) })),
}));

export default useQuantityProduct;
