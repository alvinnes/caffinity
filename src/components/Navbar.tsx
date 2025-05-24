import { Heart, List, ShoppingCart, User } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router";
import useClickedIcon from "../hooks/useClickedIcon";
import { useEffect } from "react";
import useQuantityProduct from "../hooks/useQuantityProduct";

const Navbar = () => {
  const setClickedBtn = useClickedIcon((state) => state.setClickedIcon);
  const clickedBtn = useClickedIcon((state) => state.clickedIcon);
  const setQuantity = useQuantityProduct((state) => state.setQuantity);
  const quantity = useQuantityProduct((state) => state.quantity);

  useEffect(() => {
    const storeTotalQuantity =
      JSON.parse(localStorage.getItem("totalQuantity")!) || [];
    setQuantity(storeTotalQuantity);
  }, [setQuantity]);

  const handleShowNavbar = () => {
    setClickedBtn(!clickedBtn);
  };

  return (
    <nav className="fixed top-2 left-1/2 z-999 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-md bg-white px-[3%] shadow-sm sm:w-10/12">
      <div className="flex items-center gap-8">
        <div className="h-15 w-25 sm:h-20 sm:w-30">
          <Link to="/">
            <img
              src="/img/logo.png"
              alt="foto logo caffinty"
              className="size-full object-cover"
            />
          </Link>
        </div>
        <ul className="hidden gap-6 sm:flex">
          <NavigationItem link="#about" text="Tentang" />
          <NavigationItem link="#menus" text="Menu" />
          <NavigationItem link="#reservasi" text="Reservasi" />
          <NavigationItem link="#features" text="Fitur" />
          <NavigationItem link="#testimonials" text="Testimoni" />
          <NavigationItem link="#product" text="Product" />
          <NavigationItem link="#contact" text="Contact" />
        </ul>
      </div>

      <div className="flex cursor-pointer items-center gap-3 text-slate-700">
        <div className="relative">
          <ShoppingCart className="size-6 sm:size-5" />
          <span
            className={`${quantity == 0 && "hidden"} bg-coffe absolute -top-2 left-2 flex size-3 items-center justify-center rounded-full p-2.5 text-[0.8em] text-white`}
          >
            {quantity}
          </span>
        </div>
        <Heart className="size-6 sm:size-5" />
        <User size={20} />
        <List className="-ml-2 size-6 sm:hidden" onClick={handleShowNavbar} />
      </div>
    </nav>
  );
};

type NavigationItemProps = {
  text: string;
  link: string;
};

const NavigationItem = (props: NavigationItemProps) => {
  const { link, text } = props;
  const location = useLocation();
  const activeNav = location.hash == link;
  return (
    <li
      className={`${activeNav ? "text-[#E4CDA7]" : "text-black"} hover:text-[#E4CDA7]`}
    >
      <a href={link}>{text}</a>
    </li>
  );
};

export default Navbar;
