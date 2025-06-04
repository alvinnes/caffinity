import ContentCartProduct from "../components/CartProductPage/ContentCartProduct";
import SubNavbar from "../components/SubNavbar";

const CartProductPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-slate-100">
      <SubNavbar />
      <ContentCartProduct />
    </main>
  );
};

export default CartProductPage;
