import React from "react";
import {
  SearchInput,
  SearchedForm,
  SearchBtn,
  SearchLabel,
} from "./SearchForm.styled";

const SearchForm = ({ onSubmit, onChange, searchTerm, searchBy }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value, searchBy);
  };

  return (
    <SearchedForm onSubmit={onSubmit}>
      <SearchLabel>
        <SearchInput
          type="search" 
          placeholder="Search recipe..."
          id="searchTerm"
          name="searchTerm"
          value={searchTerm}
          onChange={handleChange}
          required
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchLabel>
    </SearchedForm>
  );
};

export default SearchForm;