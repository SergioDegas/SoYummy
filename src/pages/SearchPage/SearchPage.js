import React, { useState, Suspense, useEffect } from 'react';
import { Outlet } from "react-router-dom";
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
  const isLoading = useSelector(selectSearchStatus);
  const error = useSelector(selectSearchError);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchRecipes({ searchTerm }));
  };

  useEffect(() => {
    dispatch(searchRecipes());
}, [dispatch]);

  return (
    <Container>
        <Section>
            <WrapperTitle>
                <PageTitle>Search</PageTitle>
            </WrapperTitle>
            <SearchBar handleSearch={handleSearch} setSearchTerm={setSearchTerm} />
           
            {recipes.length > 0 && !isLoading && !error && (
                        <SearchedRecipesList recipes={recipes} />
                    )}
           
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </Section>
    </Container>
  );
};

export default SearchPage;