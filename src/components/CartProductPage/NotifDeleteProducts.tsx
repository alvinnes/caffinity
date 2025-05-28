import { Trash } from "@phosphor-icons/react";
import useProductCart from "../../hooks/useProductCart";
import useQuantityProduct from "../../hooks/useQuantityProduct";

const NotifDeleteProducts = () => {
  const setProductCart = useProductCart((state) => state.setProductCart);
  const setIsClicked = useProductCart((state) => state.setIsClicked);
  const isClicked = useProductCart((state) => state.isClicked);
  const setQuantity = useQuantityProduct((state) => state.setQuantity);

  const handleRemoveDatas = () => {
    setProductCart([]);
    localStorage.removeItem("products");
    localStorage.removeItem("totalQuantity");
    setIsClicked(false);
    setQuantity(0);
  };
  const handleDisagree = () => {
    setIsClicked(false);
    setQuantity(0);
  };
  return (
    <div
      className={`${isClicked ? "mt-0 scale-100 opacity-100" : "-mt-8 scale-90 opacity-0"} fixed top-1/2 left-1/2 flex h-60 w-60 -translate-1/2 flex-col items-center gap-4 rounded-xl bg-white p-2 text-slate-600 shadow-md transition-all duration-500 ease-in-out`}
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

export default NotifDeleteProducts;
