import { ArrowArcLeft, Heart, ShoppingCart, User } from "@phosphor-icons/react";
import { useEffect } from "react";
import { Link } from "react-router";
import useQuantityProduct from "../hooks/useQuantityProduct";

const SubNavbar = () => {
  const setQuantity = useQuantityProduct((state) => state.setQuantity);
  const quantity = useQuantityProduct((state) => state.quantity);
  const quantityWiselist = useQuantityProduct(
    (state) => state.quantityWiselist,
  );
  const setQuantityWiselist = useQuantityProduct(
    (state) => state.setQuantityWiselist,
  );

  useEffect(() => {
    const storeTotalQuantity =
      JSON.parse(localStorage.getItem("totalQuantity")!) || [];
    setQuantity(storeTotalQuantity);
  }, [setQuantity]);

  useEffect(() => {
    const storedTotalQuantityWiselist =
      JSON.parse(localStorage.getItem("totalWiselist")!) || [];
    setQuantityWiselist(storedTotalQuantityWiselist);
  }, [setQuantityWiselist]);
  return (
    <nav className="bg-coffe fixed top-2 left-1/2 z-999 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-md px-[3%] py-6 text-white shadow-sm sm:w-10/12">
      <Link to={"/"}>
        <ArrowArcLeft size={25} />
      </Link>
      <div className="flex cursor-pointer items-center gap-3">
        <Link to={"/cart"}>
          <div className="relative">
            <ShoppingCart className="size-6 sm:size-5" />
            <span
              className={`${quantity == 0 && "hidden"} bg-secondary absolute -top-2 left-2 flex size-3 items-center justify-center rounded-full p-2.5 text-[0.8em] text-slate-600`}
            >
              {quantity}
            </span>
          </div>
        </Link>
        <Link to={"/wishlist"}>
          <div className="relative">
            <Heart className="size-6 sm:size-5" />
            <span
              className={`${quantityWiselist == 0 && "hidden"} bg-secondary absolute -top-2 left-2 flex size-3 items-center justify-center rounded-full p-2.5 text-[0.8em] text-slate-600`}
            >
              {quantityWiselist}
            </span>
          </div>
        </Link>
        <User size={20} />
      </div>
    </nav>
  );
};

export default SubNavbar;
