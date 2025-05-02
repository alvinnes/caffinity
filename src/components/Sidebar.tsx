import { useLocation } from "react-router";
import useClickedIcon from "../hooks/useClickedIcon";

const Sidebar = () => {
    const clickedBtn = useClickedIcon()
  return (
    <aside
      className={`${clickedBtn!.clickedIcon ? "right-0 opacity-100" : "opacity-0 -right-full"} fixed top-0 z-888 h-screen w-7/12 bg-white shadow-md transition-all duration-600 ease`}
    >
      <ul className="mx-4 mt-30 flex flex-col gap-6">
        <NavigationItem link="#about" text="About" />
        <NavigationItem link="#menus" text="Menus" />
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
