import useTheme from "../hooks/useTheme";
import { NavLink } from "react-router-dom";
import { logoDark, logoWhite } from "../assets";
import { IoMdClose } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { MdPlace } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import "../styles/sidebar.css";
import { useState } from "react";
import ThemeButton from "../components/ThemeButton";

const links = [
  { name: "Explore", to: "/", icon: HiHome },
  { name: "Around You", to: "/around-you", icon: MdPlace },
  { name: "Top Artists", to: "/top-artists", icon: IoPerson },
  { name: "Top Songs", to: "/top-songs", icon: MdLibraryMusic },
];

interface NavLinksProps {
  handleClick: () => void;
}

const NavLinks = ({ handleClick }: NavLinksProps) => (
  <div className="menu-container">
    {links.map((item) => {
      return (
        <NavLink
          key={item.name}
          to={item.to}
          className={`navlink`}
        >
          <item.icon className="menu-icon" />
          <span className="menu-text">{item.name}</span>
          
        </NavLink>
      );
    })}
  </div>
);

const Sidebar = () => {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <div className='container'>
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
          <button onClick={() => setMobileMenuOpen(false)} className="sidebar-icon-button">
            <IoMdClose className="sidebar-toggle-icon" />
          </button>
        </div>
      </div>

      <div>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
      <div className="theme-toggle-container">
        <p>Change Mode</p>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Sidebar;
