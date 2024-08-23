import { createContext, useState } from 'react';
import { IThemeContextType } from '../@types/theme';

type Theme = "dark" | "light";
export const ThemeContext = createContext<IThemeContextType | null>(null);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
