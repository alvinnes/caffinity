import { create } from "zustand";

interface State {
  totalPrice: number;
  setTotalPrice: (price: number) => void;
}

const useTotalPrice = create<State>((set) => ({
  totalPrice: 0,
  setTotalPrice: (price: number) =>
    set((state) => ({ totalPrice: (state.totalPrice = price) })),
}));

export default useTotalPrice;
