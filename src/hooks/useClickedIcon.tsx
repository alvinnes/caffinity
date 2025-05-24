import { create } from "zustand";

interface State {
  clickedIcon: boolean;
  setClickedIcon: (condition: boolean) => void;
}

const useClickedIcon = create<State>((set) => ({
  clickedIcon: false,
  setClickedIcon: (condition: boolean) =>
    set((state) => ({ clickedIcon: (state.clickedIcon = condition) })),
}));

export default useClickedIcon;
