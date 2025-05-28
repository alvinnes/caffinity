import { create } from "zustand";

interface State {
  isClicked: boolean;
  isClickedWiselist: boolean;
}

interface Action {
  setIsClicked: (condition: boolean) => void;
  setIsClickedWiselist: (condition: boolean) => void;
}

const useNotifCart = create<State & Action>((set) => ({
  isClicked: false,
  isClickedWiselist: false,
  setIsClicked: (condition: boolean) =>
    set((state) => ({ isClicked: (state.isClicked = condition) })),
  setIsClickedWiselist: (condition: boolean) =>
    set((state) => ({
      isClickedWiselist: (state.isClickedWiselist = condition),
    })),
}));

export default useNotifCart;
