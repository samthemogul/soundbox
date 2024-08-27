import useTheme from "../hooks/useTheme";
import { NavLink } from "react-router-dom";
import { logoDark, logoWhite } from "../assets";
import { IoMdClose } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { MdPlace } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import "../styles/sidebar.css";

import ThemeButton from "../components/ThemeButton";
import useMobileNav from "../hooks/useMobileNav";

const links = [
  { name: "Explore", to: "/", icon: HiHome },
  { name: "Around You", to: "/around-you", icon: MdPlace },
  { name: "Top Artists", to: "/top-artists", icon: IoPerson },
  { name: "Top Songs", to: "/top-songs", icon: MdLibraryMusic },
];

interface NavLinkProps {
    handleToggle: (() => void) | undefined;
}


const NavLinks = ({ handleToggle } : NavLinkProps) => (
  <div className="menu-container">
    {links.map((item) => {
      return (
        <NavLink
          key={item.name}
          to={item.to}
          className={`navlink`}
          onClick={handleToggle}
        >
          <item.icon className="menu-icon" />
          <span className="menu-text">{item.name}</span>
          
        </NavLink>
      );
    })}
  </div>
);

const MobileNav = () => {
  const { theme } = useTheme() || {};
  const { isOpen, toggleNav } = useMobileNav() || {};
  return (
    <div className={`mobile-nav-container ${isOpen ? "active" : ""}`}>
      <div className="header-container">
        {/* Logo container */}
        <div className="logo-container">
          <img
            className="logo"
            src={theme === "dark" ? logoWhite : logoDark}
            alt="soundbox"
          />
          <h3 className="logoText">Soundbox</h3>
        </div>

        <div>
          <button onClick={toggleNav} className="sidebar-toggle-button">
            <IoMdClose className="sidebar-toggle-icon" />
          </button>
        </div>
      </div>

      <div >
        <NavLinks handleToggle={toggleNav} />
      </div>
      <div className="theme-toggle-container">
        <p>Change Mode</p>
        <ThemeButton />
      </div>
    </div>
  );
};

export default MobileNav;
