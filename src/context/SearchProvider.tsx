import { createContext, useState } from 'react';

interface ISearchContextType {
    searchText: string;
    handleChange: (query: string) => void;
}


export const SearchContext = createContext<ISearchContextType | null>(null);

export const SearchProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleChange = (query: string) => {
    setSearchText(query);
  }

  return (
    <SearchContext.Provider value={{ searchText, handleChange }}>
      {children}
    </SearchContext.Provider>
  );
};
