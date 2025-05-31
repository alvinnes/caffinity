import { Trash } from "@phosphor-icons/react";
import useProductCart from "../../hooks/useProductCart";
import useQuantityProduct from "../../hooks/useQuantityProduct";
import useNotifCart from "../../hooks/useNotifCart";

const NotifDeleteWishlist = () => {
  const setWishlistProducts = useProductCart(
    (state) => state.setWishlistProducts,
  );
  const setIsClickedWishlist = useNotifCart(
    (state) => state.setIsClickedWiselist,
  );
  const isClickedWishlist = useNotifCart((state) => state.isClickedWiselist);
  const setQuantityWishlist = useQuantityProduct(
    (state) => state.setQuantityWiselist,
  );

  const handleRemoveDatas = () => {
    setWishlistProducts([]);
    localStorage.removeItem("whislists");
    localStorage.removeItem("totalWiselist");
    setIsClickedWishlist(false);
    setQuantityWishlist(0);
  };
  const handleDisagree = () => {
    setIsClickedWishlist(false);
  };
  return (
    <div
      className={`${isClickedWishlist ? "visible opacity-100" : "invisible opacity-0"} fixed top-0 left-0 size-full bg-white/10 backdrop-blur-sm transition-all duration-500`}
    >
      <div
        className={`${isClickedWishlist ? "mt-0 scale-100 opacity-100" : "-mt-8 scale-90 opacity-0"} fixed top-1/2 left-1/2 flex h-60 w-60 -translate-1/2 flex-col items-center gap-4 rounded-xl bg-white p-2 text-slate-600 shadow-md transition-all duration-500 ease-in-out`}
      >
        <Trash size={70} weight="bold" className="mt-4" />
        <h3 className="text-center">
          Apakah kamu yakin ingin menghapus semua product?
        </h3>
        <div className="flex gap-4">
          <BtnAgreement
            text="Ya"
            color="bg-red-700 text-white"
            clicked={handleRemoveDatas}
          />
          <BtnAgreement
            text="Tidak"
            color="bg-slate-100 "
            clicked={handleDisagree}
          />
        </div>
      </div>
    </div>
  );
};

interface BtnAgreementProps {
  color: string;
  text: string;
  clicked: () => void;
}

const BtnAgreement = ({ color, text, clicked }: BtnAgreementProps) => {
  return (
    <button
      onClick={clicked}
      className={`cursor-pointer rounded-sm px-8 py-2 text-sm font-semibold ${color} shadow-sm`}
    >
      {text}
    </button>
  );
};

export default NotifDeleteWishlist;
