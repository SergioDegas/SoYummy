
import React from 'react';
import { useDispatch } from 'react-redux';
import SearchForm from '../SearchForm';
import SearchTypeSelector from '../SearchTypeSelector';
import { searchRecipes } from '../../redux/search/operation';

const SearchBar = ({ setSearchTerm }) => {
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    const searchBy = e.target.value;
    dispatch(searchRecipes({ searchTerm: '', page: 1, limit: 10, searchBy }));
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <SearchForm searchBy="default" onChange={handleInputChange} />
      <SearchTypeSelector onChange={handleSelectChange} />
    </div>
  );
};

export default SearchBar;