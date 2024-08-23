import { IoMoon } from "react-icons/io5";
import { WiDaySunny } from "react-icons/wi";
import useTheme from "../hooks/useTheme";
import '../styles/components/themebutton.css'

const ThemeButton = () => {

    const { theme, toggleTheme } = useTheme() || {};
  return (
    <div className="theme-btn-container">
        <button className="theme-btn">
          {theme === "light" ? (
            <IoMoon className="moon icon" size={20} onClick={toggleTheme} />
          ) : (
            <WiDaySunny className="day icon" size={20} onClick={toggleTheme} />
          )}
        </button>
      </div>
  )
}

export default ThemeButton