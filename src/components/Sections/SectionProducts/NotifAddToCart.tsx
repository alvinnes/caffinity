import { ReactNode } from "react";

interface NotifAddTocartProps {
  text: string;
  icon: ReactNode;
  isClicked: boolean;
}

const NotifAddToCart = ({ text, icon, isClicked }: NotifAddTocartProps) => {
  return (
    <div
      className={`${isClicked ? "top-20 opacity-100 sm:top-25" : "top-15 opacity-0"} fixed z-1000 flex w-xs items-center gap-6 rounded-sm bg-white p-3 shadow-xl transition-all duration-500 ease-out`}
    >
      {icon}
      <p className="font-semibold text-slate-600">{text}</p>
    </div>
  );
};

export default NotifAddToCart;
