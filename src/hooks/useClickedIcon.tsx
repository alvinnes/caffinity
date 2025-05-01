import { useContext } from "react";
import { ClickedIconContext } from "../context/ClickedIcon";

const useClickedIcon = () => {
  const context = useContext(ClickedIconContext);
  if (!context) return;
  return context;
};

export default useClickedIcon;
