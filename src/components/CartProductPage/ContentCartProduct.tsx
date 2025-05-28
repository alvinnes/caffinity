import { useEffect } from "react";
import DescriptionProductCart from "./DescriptionProductCart";
import { ProductCoffe } from "../../assets/datas/productCoffe";
import { SlideProduct } from "../../services/SlideProduct";
import { ShoppingCart } from "@phosphor-icons/react";
import SectionCheckout from "./SectionCheckout";
import NotifDeleteProducts from "./NotifDeleteProducts";
import useProductCart from "../../hooks/useProductCart";

type DatasProducts = ProductCoffe & SlideProduct;

const ContentCartProduct = () => {
  const productCart = useProductCart((state) => state.productCart);
  const setProductCart = useProductCart((state) => state.setProductCart);
  const setIsClicked = useProductCart((state) => state.setIsClicked);

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("products")!) || [];
    setProductCart(storedProduct);
  }, [setProductCart]);

  return (
    <section className="relative mt-20 h-[85%] w-11/12 rounded-xl bg-white p-4 shadow-sm sm:mt-24 sm:w-10/12">
      <div className="border-coffe/50 mt-4 mb-8 flex w-full items-center gap-6 border-b-4 border-solid py-3">
        <button
          onClick={() => setIsClicked(true)}
          disabled={productCart.length < 1}
          className={`${productCart.length < 1 ? "cursor-not-allowed" : "cursor-pointer"} bg-coffe/70 rounded-sm px-8 py-3 font-semibold text-white shadow-md`}
        >
          Hapus Semua
        </button>
      </div>
      <div className="scroll-set h-[85%] w-full overflow-y-scroll">
        {productCart.length < 1 && (
          <p className="absolute top-1/2 left-1/2 flex -translate-1/2 items-center gap-4 text-2xl font-bold text-slate-600">
            <ShoppingCart size={30} weight="bold" /> Keranjang Masih Kosong
          </p>
        )}
        {productCart.map((product: DatasProducts) => (
          <div
            key={product.id}
            className="bg-secondary/30 relative mb-6 flex w-full items-center gap-8 rounded-xl px-6 py-2 shadow-sm backdrop-blur-lg"
          >
            <div className="size-16 rounded-full bg-white p-1 shadow-sm">
              <img
                src={product.img}
                alt=""
                className="bg-secondary size-full rounded-full"
              />
            </div>
            <DescriptionProductCart product={product} />
          </div>
        ))}
      </div>
      <SectionCheckout />
      <NotifDeleteProducts />
    </section>
  );
};

export default ContentCartProduct;
