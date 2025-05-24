import { CheckCircle } from "@phosphor-icons/react";
import useNotifCart from "../../../hooks/useNotifCart";

const NotifAddToCart = () => {
  const isClicked = useNotifCart((state) => state.isClicked);
  return (
    <div
      className={`${isClicked ? "top-20 opacity-100 sm:top-25" : "top-15 opacity-0"} fixed z-1000 flex items-center gap-2 rounded-sm bg-white p-3 shadow-xl transition-all duration-500 ease-out`}
    >
      <CheckCircle size={30} className="text-emerald-300" weight="fill" />
      <p className="font-semibold text-slate-600">
        Berhasil Memasukkan Ke Keranjang
      </p>
    </div>
  );
};

export default NotifAddToCart;
