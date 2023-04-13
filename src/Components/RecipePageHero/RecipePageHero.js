import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/auth/selectors";
import Container from "../Container";

import {
  SectionHero,
  SectionHeroTitle,
  SectionHeroDesc,
  SectionHeroBtn,
  TimeBlock,
  TimeText,
} from "./RecipePageHero.styled";
import { BsClock } from "react-icons/bs";
import { addToFavoriteList } from "redux/auth/operation";

const RecipePageHero = ({ id, title, description, time, owner, favorites }) => {
  const user = useSelector(selectUser);
  const isOwnRecipe = user._id === owner;
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (typeof favorites !== "undefined") {
      setFavorite(favorites.includes(user._id));
    }
  }, [favorites, user._id]);

  const dispatch = useDispatch();
  const addToFavorite = () => {
    const credentials = {
      recipeId: id,
    };
    dispatch(addToFavoriteList(credentials));
    setFavorite(!favorite);
  };

  return (
    <SectionHero>
      <Container>
        <SectionHeroTitle children={title} />
        <SectionHeroDesc>{description}</SectionHeroDesc>
        {!isOwnRecipe && (
          <SectionHeroBtn
            type="button"
            aria-label="Add to favorite"
            onClick={() => {
              addToFavorite();
            }}
          >
            {favorite
              ? "Remove from favorite recipes"
              : "Add to favorite recipes"}
          </SectionHeroBtn>
        )}
        <TimeBlock>
          {time && (
            <>
              <BsClock size="14px" fill="#23262A" />
              <TimeText>{time.replace(/\D/g, "")} min</TimeText>
            </>
          )}
        </TimeBlock>
      </Container>
    </SectionHero>
  );
};

export default RecipePageHero;
