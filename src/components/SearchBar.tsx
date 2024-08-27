
import { useState } from "react";
import "../styles/components/searchbar.css";
import { IoSearch } from "react-icons/io5";
import useSearch from "../hooks/useSearch";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
const navigate = useNavigate();
  const { handleChange } = useSearch() || { searchText: "", handleChange: () => {} };

const [ query, setQuery ] = useState<string>("")

const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // submit if the key pressed is enter key
  
  setQuery(e.target.value)
}

const enterKey = (e: { charCode: number; }) => {
  if(e.charCode == 13) {
    handleSubmit();
  }
}

const handleSubmit = async () => {
  if(query){
    console.log(query)
  handleChange(query)
  // route to page /search/query
  navigate(`/search/${query}`)
  }

};



  return (
    <div className="searchbar-container">
      <div className="input-and-button">
        <input value={query} onChange={handleSearchChange} onKeyDown={enterKey} className="search-input" type="text" placeholder="Search for a song..." />
        <button onClick={handleSubmit} className="search-button">
          <IoSearch className="search-icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
