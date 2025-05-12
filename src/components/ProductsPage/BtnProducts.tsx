import { useState } from "react";
import productCoffe, { ProductCoffe } from "../../assets/datas/productCoffe";
import BtnProductsItem from "./BtnProductsItem";

interface BtnProductsProps {
  setIsFiltering: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductCoffe[]>>;
}

const BtnProducts = (props: BtnProductsProps) => {
  const { setIsFiltering, setProducts } = props;
  const [activeBtn, setActiveBtn] = useState<string>("Semua");

  const filterProducts = (kategori: string) => {
    setIsFiltering(true);
    setActiveBtn(kategori);
    setTimeout(() => {
      if (kategori == "Semua") {
        setProducts(productCoffe);
      } else {
        const coffeBlend = productCoffe.filter(
          (product: ProductCoffe) => product.category == kategori,
        );
        setProducts(coffeBlend);
      }
      setIsFiltering(false);
    }, 400);
  };

  return (
    <div className="scroll-set flex gap-6 overflow-x-scroll sm:w-full sm:justify-center sm:gap-4 sm:overflow-x-visible">
      {[
        "Semua",
        "Coffe Blend",
        "Coffe Pods",
        "Flavored Coffe",
        "Ground Coffe",
      ].map((category) => (
        <BtnProductsItem
          key={category}
          text={category}
          isActive={activeBtn == category}
          clicked={() => filterProducts(category)}
        />
      ))}
    </div>
  );
};

export default BtnProducts;
