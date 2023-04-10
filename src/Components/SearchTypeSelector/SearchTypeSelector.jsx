import React from "react";

const SearchTypeSelector = ({ onSearchByChange, searchBy }) => {
  const handleSelectChange = (e) => {
    const searchBy = e.target.value;
    onSearchByChange(searchBy);
  };

  return (
    <div>
      <label htmlFor="searchBy">Search by:</label>
      <select id="searchBy" name="searchBy" value={searchBy} onChange={handleSelectChange}>
        <option value="name">title</option>
        <option value="ingredient">Ingredient</option>
        <option value="family">Family</option>
      </select>
    </div>
  );
};

export default SearchTypeSelector;