import { useEffect } from "react";
import { ProductCoffe } from "../assets/datas/productCoffe";
import ContentProductMenu from "../components/Sections/SectionMenus/ContentProductMenu";
import useProductCart from "../hooks/useProductCart";
import NotifDeleteWishlist from "../components/WishlistProducts/NotifDeleteWishlist";
import BtnDelete from "../components/WishlistProducts/BtnDelete";
import { Heart } from "@phosphor-icons/react";
import SubNavbar from "../components/SubNavbar";

const WishlistPage = () => {
  const wishlistProducts = useProductCart((state) => state.wishlistProducts);
  const setWishlistProducts = useProductCart(
    (state) => state.setWishlistProducts,
  );

  useEffect(() => {
    const storedWiselistProduct =
      JSON.parse(localStorage.getItem("whislists")!) || [];
    setWishlistProducts(storedWiselistProduct);
  }, [setWishlistProducts]);

  return (
    <main className="flex min-h-screen w-full justify-center">
      <SubNavbar />
      <section className="relative flex w-11/12 flex-col items-center justify-center py-20">
        <h2 className="mt-20 mb-10 w-full text-4xl font-bold text-nowrap text-slate-600 sm:mt-30 sm:w-11/12 sm:text-5xl">
          Product Wishlist
        </h2>
        <hr className="border-coffe/50 sm: :w-11/12 mb-5 w-full rounded-md border-b-2 border-solid sm:mb-0" />
        <BtnDelete />
        {wishlistProducts.length < 1 && (
          <div className="mt-25 flex flex-col items-center gap-4 text-center text-slate-600">
            <Heart size={80} />
            <h3 className="text-2xl font-bold">Wishlist masih kosong...</h3>
          </div>
        )}
        <div
          className={`${wishlistProducts.length < 1 && "hidden"} bg-secondary mt-14 grid place-content-center gap-3 py-4 sm:w-11/12 sm:grid-cols-2 sm:pl-6`}
        >
          {wishlistProducts.map((product: ProductCoffe) => (
            <ContentProductMenu key={product.id} item={product} />
          ))}
        </div>
        <hr className="border-coffe/50 sm: mt-16 w-full rounded-md border-b-2 border-solid *:w-11/12" />
        <NotifDeleteWishlist />
      </section>
    </main>
  );
};

export default WishlistPage;
