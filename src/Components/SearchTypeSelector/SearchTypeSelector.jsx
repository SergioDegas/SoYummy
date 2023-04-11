import React from "react";
import { Wrapper, Label, SectionLabel } from "./SearchTypeSelector.styled";

const SearchTypeSelector = ({ onSearchByChange, searchBy }) => {
  const handleSelectChange = (e) => {
    const searchBy = e.target.value;
    onSearchByChange(searchBy);
  };
  return (
    <Wrapper>
      <Label htmlFor="searchBy">Search by:</Label>
      <SectionLabel id="searchBy" name="searchBy" value={searchBy} onChange={handleSelectChange}>
        <option value="name">title</option>
        <option value="ingredient">Ingredient</option>
        <option value="family">Family</option>
      </SectionLabel>
    </Wrapper>
  );
};

export default SearchTypeSelector;