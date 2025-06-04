import ContentProducts from "../components/ProductsPage/ContentProducts";
import SubNavbar from "../components/SubNavbar";

const ProductsPage = () => {
  return (
    <main className="bg-secondary/25 min-h-screen w-full">
      <SubNavbar />
      <ContentProducts />
    </main>
  );
};

export default ProductsPage;
