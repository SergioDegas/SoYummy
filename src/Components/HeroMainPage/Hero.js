import Container from "Components/Container/Container.styled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchRecipes } from "../../redux/search/operation";

import {
  SectionHero,
  HeroText,
  HeroTitle,
  HeroSpan,
  HeroInput,
  HeroForm,
  HeroBtn,
  HeroRecipe,
  RecipeText,
  RecipeSpan,
  RecipeIcon,
  RecipeSecondaryText,
  RecipeSecondarySpan,
} from "./HeroStyled";
import { useMedia } from "hooks";

export const Hero = () => {
  const { isMobileScreen } = useMedia();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState("");
  const [searchBy, setSearchBy] = useState("name")
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(searchTerm);
    setLimit(limit)
    setSearchBy()
    dispatch(searchRecipes({ searchTerm: searchTerm, page: 1, limit: 12, searchBy: searchBy  }));
    localStorage.setItem('searchTerm', JSON.stringify(searchTerm));
    localStorage.setItem('searchBy', JSON.stringify(searchBy));
    navigate(`/search`);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SectionHero>
      <Container>
        <HeroTitle>
          <HeroSpan>So</HeroSpan>Yummy
        </HeroTitle>
        {isMobileScreen && (
          <HeroText>
            "What to cook?" is not only a recipe
            <br />
            app, it is, in fact, your cookbook. You
            <br />
            can add your own recipes to save
            <br />
            them for the future.
          </HeroText>
        )}
        {!isMobileScreen && (
          <HeroText>
            "What to cook?" is not only a recipe app, it is, in fact,
            <br /> your cookbook. You can add your own recipes to
            <br /> save them for the future.
          </HeroText>
        )}
        <HeroForm onSubmit={handleSearch}>
          <HeroInput placeholder="Search recipe..." value={searchTerm} onChange={handleChange} />
          <HeroBtn type="submit">Search</HeroBtn>
        </HeroForm>
        <HeroRecipe>
          {isMobileScreen && (
            <RecipeText>
              <RecipeSpan>Delicious and healthy</RecipeSpan>way to enjoy
              <br />
              a variety of fresh ingredients in one
              <br />
              satisfying meal
            </RecipeText>
          )}
          {!isMobileScreen && (
            <RecipeText>
              <RecipeSpan>Delicious and healthy</RecipeSpan> way to
              <br /> enjoy a variety of fresh ingredients
              <br /> in one satisfying meal
            </RecipeText>
          )}
          <RecipeSecondaryText to="/categories/Breakfast">
            See recipes
            <RecipeSecondarySpan>
              <RecipeIcon />
            </RecipeSecondarySpan>
          </RecipeSecondaryText>
        </HeroRecipe>
      </Container>
    </SectionHero>
  );
};
export default Hero;
