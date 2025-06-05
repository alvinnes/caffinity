import { useEffect } from "react";
import SectionCheckout from "./SectionCheckout";
import NotifDeleteProducts from "./NotifDeleteProducts";
import useProductCart from "../../hooks/useProductCart";
import ContentCartItem from "./ContentCartItem";

const ContentCartProduct = () => {
  const productCart = useProductCart((state) => state.productCart);
  const setProductCart = useProductCart((state) => state.setProductCart);
  const setIsClicked = useProductCart((state) => state.setIsClicked);

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("products")!) || [];
    setProductCart(storedProduct);
  }, [setProductCart]);

  return (
    <section className="relative mt-20 h-[85%] w-11/12 overflow-hidden rounded-xl bg-white p-4 shadow-sm sm:mt-24 sm:w-10/12">
      <div className="border-coffe/50 mt-4 mb-8 flex w-full items-center gap-6 border-b-4 border-solid py-3">
        <button
          onClick={() => setIsClicked(true)}
          disabled={productCart.length < 1}
          className={`${productCart.length < 1 ? "cursor-not-allowed" : "cursor-pointer"} bg-coffe/70 rounded-sm px-8 py-3 font-semibold text-white shadow-md`}
        >
          Hapus Semua
        </button>
      </div>
      <div className="scroll-set h-[80%] w-full overflow-y-scroll pb-20">
        <ContentCartItem productCart={productCart} />
      </div>
      <SectionCheckout />
      <NotifDeleteProducts />
    </section>
  );
};

export default ContentCartProduct;
