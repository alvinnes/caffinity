import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ProductCoffe } from "../assets/datas/productCoffe";
import ContentProductMenu from "../components/Sections/SectionMenus/ContentProductMenu";

const WishlistPage = () => {
  const [wishlistProduct, setWishlistProduct] = useState([]);

  useEffect(() => {
    const storedWiselistProduct =
      JSON.parse(localStorage.getItem("whislists")!) || [];
    setWishlistProduct(storedWiselistProduct);
  }, []);
  return (
    <main className="flex min-h-screen w-full justify-center">
      <Navbar />
      <section className="relative flex w-11/12 flex-col items-center justify-center py-20">
        <h2 className="mt-20 sm:mt-30 mb-10 w-full sm:w-11/12 text-5xl font-bold text-slate-600">
          Product Wishlist
        </h2>
        <hr className="border-coffe/50 w-full sm:w-11/12 rounded-md border-b-2 border-solid" />
        <div className="bg-secondary mt-14 grid sm:w-11/12 place-content-center gap-3 py-4 pl-8 sm:grid-cols-2">
          {wishlistProduct.map((product: ProductCoffe) => (
            <ContentProductMenu key={product.id} item={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default WishlistPage;
