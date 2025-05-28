import { Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";
import { ProductCoffe } from "../../assets/datas/productCoffe";
import { SlideProduct } from "../../services/SlideProduct";
import useTotalPrice from "../../hooks/useTotalPrice";

interface BtnControlQuantityProps {
  product: ProductCoffe & SlideProduct;
}

const BtnControlQuantity = ({ product }: BtnControlQuantityProps) => {
  const [quantityProduct, setQuantityProduct] = useState<number>(
    product.quantity!,
  );
  const setTotalPrice = useTotalPrice((state) => state.setTotalPrice);

  const handleAddQuantity = () => {
    if (quantityProduct > 9) return;
    setQuantityProduct(quantityProduct + 1);
    const newPrice = product.price * (quantityProduct + 1);
    setTotalPrice(newPrice);
  };
  const handleRemoveQuantity = () => {
    if (quantityProduct < 2) return;
    setQuantityProduct(quantityProduct - 1);
    const newPrice = Math.round(product.price * (quantityProduct - 1));
    setTotalPrice(newPrice);
  };

  return (
    <div className="top-1/2 right-10 mt-3 flex -translate-y-1/2 items-center gap-4 sm:absolute sm:mt-0">
      <button
        className="cursor-pointer rounded-sm bg-slate-100 p-1 shadow-sm"
        onClick={handleAddQuantity}
      >
        <Plus />
      </button>
      <p className="font-outfit font-semibold text-slate-600">
        {quantityProduct}
      </p>
      <button
        className="cursor-pointer rounded-sm bg-slate-100 p-1 shadow-sm"
        onClick={handleRemoveQuantity}
      >
        <Minus />
      </button>
    </div>
  );
};

export default BtnControlQuantity;
