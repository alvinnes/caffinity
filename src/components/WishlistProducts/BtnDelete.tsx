import useNotifCart from "../../hooks/useNotifCart";
import useProductCart from "../../hooks/useProductCart";

const BtnDelete = () => {
  const wishlistProducts = useProductCart((state) => state.wishlistProducts);
  const setIsClickedWishlist = useNotifCart(
    (state) => state.setIsClickedWiselist,
  );
  
  return (
    <div className="w-11/12">
      <button
        onClick={() => setIsClickedWishlist(true)}
        disabled={wishlistProducts.length < 1}
        className={`${wishlistProducts.length < 1 ? "cursor-not-allowed" : "cursor-pointer"} bg-coffe/70 mt-4 rounded-sm px-8 py-3 font-semibold text-white shadow-md`}
      >
        Hapus Semua
      </button>
    </div>
  );
};

export default BtnDelete;
