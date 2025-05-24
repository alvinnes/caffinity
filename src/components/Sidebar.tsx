import { useLocation } from "react-router";
import useClickedIcon from "../hooks/useClickedIcon";

const Sidebar = () => {
  const clickedIcon = useClickedIcon((state) => state.clickedIcon);
  return (
    <aside
      className={`${clickedIcon ? "right-0 opacity-100" : "-right-full opacity-0"} ease fixed top-0 z-888 h-screen w-7/12 bg-white shadow-md transition-all duration-600`}
    >
      <ul className="mx-4 mt-30 flex flex-col gap-6">
        <NavigationItem link="#about" text="Tentang" />
        <NavigationItem link="#menus" text="Menu" />
        <NavigationItem link="#reservasi" text="Reservasi" />
        <NavigationItem link="#features" text="Fitur" />
        <NavigationItem link="#testimonials" text="Testimoni" />
        <NavigationItem link="#product" text="Product" />
        <NavigationItem link="#contact" text="Contact" />
      </ul>
    </aside>
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
      className={`${activeNav && "bg-[#EAC696] shadow-xs"} rounded-sm px-3 py-1 text-slate-700 transition-all duration-500`}
    >
      <a href={link}>{text}</a>
    </li>
  );
};

export default Sidebar;
