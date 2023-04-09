import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipes } from "../../redux/search/operation";

const SearchForm = ({ searchBy }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchRecipes({ searchTerm, page: 1, limit: 8, searchBy }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm">{`Search by ${searchBy}`}</label>
      <input
        type="text"
        id="searchTerm"
        name="searchTerm"
        value={searchTerm}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;