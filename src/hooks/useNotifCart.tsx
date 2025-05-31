import { create } from "zustand";

interface State {
  isClicked: boolean;
  isClickedWiselist: boolean;
  isSuccesAddWishlist: boolean;
}

interface Action {
  setIsClicked: (condition: boolean) => void;
  setIsClickedWiselist: (condition: boolean) => void;
  setIsSuccesAddWishlist: (condition: boolean) => void;
}

const useNotifCart = create<State & Action>((set) => ({
  isClicked: false,
  isClickedWiselist: false,
  isSuccesAddWishlist: false,
  setIsClicked: (condition: boolean) =>
    set((state) => ({ isClicked: (state.isClicked = condition) })),
  setIsClickedWiselist: (condition: boolean) =>
    set((state) => ({
      isClickedWiselist: (state.isClickedWiselist = condition),
    })),
  setIsSuccesAddWishlist: (condition: boolean) =>
    set((state) => ({
      isSuccesAddWishlist: (state.isSuccesAddWishlist = condition),
    })),
}));

export default useNotifCart;
