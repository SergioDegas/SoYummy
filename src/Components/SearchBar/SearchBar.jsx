import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchForm from '../SearchForm';
import SearchTypeSelector from '../SearchTypeSelector';
import { searchRecipes } from '../../redux/search/operation';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectChange = (e) => {
    const searchBy = e.target.value;
    dispatch(searchRecipes({ searchTerm, page: 1, limit: 10, searchBy }));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchRecipes({ searchTerm, page: 1, limit: 10 }));
  };

  return (
    <div>
      <SearchForm searchBy="default" searchTerm={searchTerm} onSearch={handleSearch} setSearchTerm={setSearchTerm} />
      <SearchTypeSelector onChange={handleSelectChange} />
    </div>
  );
};

export default SearchBar;