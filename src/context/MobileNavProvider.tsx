import { createContext, useState } from 'react';

interface INavContextType {
    isOpen: boolean;
    toggleNav: () => void;
}


export const MobileNavContext = createContext<INavContextType | null>(null);

export const MobileNavProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <MobileNavContext.Provider value={{ isOpen, toggleNav }}>
      {children}
    </MobileNavContext.Provider>
  );
};
