import React from "react";
import "../styles/components/searchbar.css";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="input-and-button">
        <input className="search-input" type="text" placeholder="Search for a song..." />
        <button className="search-button">
          <IoSearch className="search-icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
