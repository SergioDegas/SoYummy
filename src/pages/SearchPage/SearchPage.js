import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageTitle } from "Components/PageTitle/PageTitle";
import SearchBar from "../../Components/SearchBar/";
import SearchedRecipesList from "../../Components/SearchedRecipesList";
import Container  from "../../Components/Container";
import {
  Section,
  WrapperTitle,
} from "./SearchPage.styled";

import { searchRecipes } from "../../redux/search/operation";
import { selectRecipes, selectSearchStatus, selectSearchError } from "../../redux/search/selectors";

const SearchPage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);
  const searchStatus = useSelector(selectSearchStatus);
  const searchError = useSelector(selectSearchError);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchRecipes({ searchTerm }));
  };

  return (
    <Container>
        <Section>
            <WrapperTitle>
                <PageTitle>Search</PageTitle>
            </WrapperTitle>
            <SearchBar handleSearch={handleSearch} setSearchTerm={setSearchTerm} />
            {searchStatus === "loading" && <p>Loading...</p>}
            {searchError && <p>Error: {searchError}</p>}
            {recipes.length > 0 && <SearchedRecipesList recipes={recipes} />}
        </Section>
    </Container>
  );
};

export default SearchPage;