import React  from "react";
import { useDispatch } from 'react-redux';
import { searchRecipes } from '../../redux/search/operation';

const SearchTypeSelector = ({ searchBy, onChange }) => {
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    const searchBy = e.target.value;
    dispatch(searchRecipes({ searchTerm: '', page: 1, limit: 10, searchBy }));
    onChange(e);
  };

  return (
    <div>
      <label htmlFor="searchBy">Search by:</label>
      <select id="searchBy" name="searchBy" value={searchBy} onChange={handleSelectChange}>
        <option value="default">All</option>
        <option value="title">Title</option>
        <option value="ingredient">Ingredient</option>
        <option value="family">Family</option>
      </select>
    </div>
  );
};

export default SearchTypeSelector;