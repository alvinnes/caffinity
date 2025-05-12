import Navbar from "../components/Navbar";
import ContentProducts from "../components/ProductsPage/ContentProducts";

const ProductsPage = () => {
  return (
    <main className="bg-secondary/25 min-h-screen w-full">
      <Navbar />
      <ContentProducts />
    </main>
  );
};

export default ProductsPage;
