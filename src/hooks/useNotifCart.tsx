import { create } from "zustand";

interface State {
  isClicked: boolean;
}

interface Action {
  setIsClicked: (condition: boolean) => void;
}

const useNotifCart = create<State & Action>((set) => ({
  isClicked: false,
  setIsClicked: (condition: boolean) =>
    set((state) => ({ isClicked: (state.isClicked = condition) })),
}));

export default useNotifCart;
