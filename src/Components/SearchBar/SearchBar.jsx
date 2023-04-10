import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipes } from "../../redux/search/operation";
import SearchForm from "Components/SearchForm/SearchForm";
import SearchTypeSelector from "../../Components/SearchTypeSelector";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      alert("Please enter a search term");
      return;
    }
    dispatch(searchRecipes({searchTerm, page: 1, limit: 8, searchBy}));
    setSearchTerm("");
  };

  const handleSearchByChange = (searchBy) => {
    setSearchBy(searchBy);
  };

  return (
    <div>
      <SearchForm
        searchTerm={searchTerm}
        onSubmit={handleSubmit}
        onChange={(value) => setSearchTerm(value)}
        searchBy={searchBy} // Додайте проп searchBy в SearchForm
      />
      <SearchTypeSelector
        value={searchBy}
        onSearchByChange={handleSearchByChange}
      />
    </div>
  );
};

export default SearchBar;