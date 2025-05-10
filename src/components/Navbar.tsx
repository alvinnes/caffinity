import { Heart, List, ShoppingCart, User } from "@phosphor-icons/react";
import useClickedIcon from "../hooks/useClickedIcon";
import { useLocation } from "react-router";

const Navbar = () => {
  const clickedBtn = useClickedIcon();
  const handleShowNavbar = () => {
    clickedBtn?.setClickedIcon(!clickedBtn.clickedIcon);
  };

  return (
    <nav className="fixed top-2 left-1/2 z-999 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-md bg-white px-[3%] shadow-sm sm:w-10/12">
      <div className="flex items-center gap-8">
        <div className="h-15 w-25 sm:h-20 sm:w-30">
          <a href="#home">
            <img
              src="/img/logo.png"
              alt=""
              className="size-full object-cover"
            />
          </a>
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
        <ShoppingCart className="size-6 sm:size-5" />
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
      className={`${activeNav ? "text-[#E4CDA7]" : "text-black"} hover:text-[#E4CDA7] `}
    >
      <a href={link}>{text}</a>
    </li>
  );
};

export default Navbar;
