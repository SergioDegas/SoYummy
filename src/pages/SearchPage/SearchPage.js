import React, { useState, Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PageTitle } from "Components/PageTitle/PageTitle";
import SearchBar from "../../Components/SearchBar/";
import SearchedRecipesList from "../../Components/SearchedRecipesList";
import Container from "../../Components/Container";
import {
  NoRecipesImage,
  NoRecipesText,
} from "./SearchPage.styled";
import { Section, WrapperTitle } from "../CategoriesPage/CategoriesPage.styled";
import smallNoRecipesImage from "../../images/notPage/notPageSmal.png";
import smallNoRecipesImage2x from "../../images/notPage/notPageSmal@2x.png";
import mediumNoRecipesImage from "../../images/notPage/notPageMedium.png";
import mediumNoRecipesImage2x from "../../images/notPage/notPageMedium@2x.png";

import Loader from "Components/Loader/Loader";

import { searchRecipes } from "../../redux/search/operation";
import {
  selectRecipes,
  selectSearchStatus,
  selectSearchError,
} from "../../redux/search/selectors";

const SearchPage = () => {
  const dispatch = useDispatch();

  const recipes = useSelector(selectRecipes);
  const isLoading = useSelector(selectSearchStatus);
  const error = useSelector(selectSearchError);
  const [searchTerm, setSearchTerm] = useState("");

  const smallImage = {
    src: smallNoRecipesImage,
    srcSet: `${smallNoRecipesImage} 1x, ${smallNoRecipesImage2x} 2x`,
    sizes: `
        (max-width: 767px) 100vw,
        (min-width: 768px) and (max-width: 1023px) 50vw,
        (min-width: 1024px) 33vw
    `,
  };

  const mediumImage = {
    src: mediumNoRecipesImage,
    srcSet: `${mediumNoRecipesImage} 1x, ${mediumNoRecipesImage2x} 2x`,
    sizes: `
        (max-width: 767px) 100vw,
        (min-width: 768px) and (max-width: 1023px) 50vw,
        (min-width: 1024px) 33vw
    `,
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchRecipes());
  };

  useEffect(() => {
    if (searchTerm !== "") {
      dispatch(searchRecipes({ searchTerm }));
    }
  }, [dispatch, searchTerm]);

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
        {isLoading && !error && <Loader />}
        {!isLoading && recipes.length === 0 && (
          <>
            <NoRecipesImage
              srcSet={`${smallImage.srcSet}, ${mediumImage.srcSet}`}
              sizes={`${smallImage.sizes}, ${mediumImage.sizes},`}
              {...smallImage}
              {...mediumImage}
              alt="No recipes found"
            />
            <NoRecipesText>Try looking for something else..</NoRecipesText>
          </>
        )}

        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Section>
    </Container>
  );
};

export default SearchPage;
