import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { searchRecipes } from '../../redux/search/operation';

const SearchForm = ({ searchBy }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchRecipes({ searchTerm, page: 1, limit: 10, searchBy }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchTerm"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={`Search by ${searchBy}`}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;