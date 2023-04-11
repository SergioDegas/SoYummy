import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipes } from "../../redux/search/operation";
import SearchForm from "Components/SearchForm/SearchForm";
import SearchTypeSelector from "../../Components/SearchTypeSelector";
import { useMedia } from "hooks";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  
  const dispatch = useDispatch();

  const media = useMedia();
    const limit = () => {
        if (media.isMobileScreen) {
            return 6;
        }
        if (media.isTabletScreen) {
            return 6;
        }
        if (media.isDesktopScreen) {
            return 12;
        }
    };

    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      alert("Please enter a search term");
      return;
    }
    dispatch(searchRecipes({searchTerm, page: 1, limit: limit(), searchBy}));
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
        searchBy={searchBy}
      />
      <SearchTypeSelector
        value={searchBy}
        onSearchByChange={handleSearchByChange}
      />
    </div>
  );
};

export default SearchBar;