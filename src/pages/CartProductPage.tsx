import ContentCartProduct from "../components/CartProductPage/ContentCartProduct";
import Navbar from "../components/Navbar";

const CartProductPage = () => {
  
  return (
    <main className="w-full h-screen bg-slate-100 flex justify-center items-center">
      <Navbar />
      <ContentCartProduct />
    </main>
  );
};

export default CartProductPage;
