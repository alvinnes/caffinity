import { Heart, House, List, ShoppingCart } from "@phosphor-icons/react";
import useClickedIcon from "../hooks/useClickedIcon";

const Navbar = () => {
  const clickedBtn = useClickedIcon();
  const handleShowNavbar = () => {
    clickedBtn?.setClickedIcon(!clickedBtn.clickedIcon);
  };
  return (
    <nav className="fixed top-2 left-1/2 z-999 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-md bg-[#EAC696] px-[3%] py-3 shadow-md sm:w-3xl">
      <div className="flex items-center gap-8">
        <div className="size-8 rounded-full bg-white">
          <a href="#home">
            <House />
          </a>
        </div>
        <ul className="hidden gap-6 sm:flex">
          <NavigationItem link="#about" text="About" />
          <NavigationItem link="#menus" text="Menus" />
          <NavigationItem link="#product" text="Product" />
          <NavigationItem link="#contact" text="Contact" />
        </ul>
      </div>

      <div className="flex cursor-pointer items-center gap-3 text-white">
        <ShoppingCart className="size-6" />
        <Heart className="size-6" />
        <button className="rounded-sm bg-[#A67B5B] px-3 py-1.5 text-sm font-semibold shadow-sm">
          Login
        </button>
        <List className="-ml-2 size-7 sm:hidden" onClick={handleShowNavbar} />
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
  return (
    <li className="text-white">
      <a href={link}>{text}</a>
    </li>
  );
};

export default Navbar;
