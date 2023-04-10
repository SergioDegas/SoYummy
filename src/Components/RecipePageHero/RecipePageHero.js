import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/auth/selectors";
import { selectFavoriteRecipes } from "redux/favorite/selectors";
import Container from "../Container";
import {addToFavoriteList} from "redux/favorite/operations";
import {
  SectionHero,
  SectionHeroTitle,
  SectionHeroDesc,
  SectionHeroBtn,
  TimeBlock,
  TimeText,
} from "./RecipePageHero.styled";
import { BsClock } from "react-icons/bs";

const RecipePageHero = ({ id, title, description, favorites, time }) => {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(selectFavoriteRecipes);
  // console.log(favoriteRecipes);
  // const {_id} = useSelector(selectUser);
  // console.log(_id);


  //TO DO
  //порівняти айді юзера з айді овнерів з масиву favorites і від того рендерити кнопку
  //можливо робити в головному компоненті ресіпіпейдж, бо проблеми з рендером
  //логіка додавання в фейворіт
  //якщо рецепт власний то кнопку не показувати взагалі
  //Клік по кнопці AddtoFavorite повинен виконувати запит і додавати даний рецепт в список улюблених
  //Якщо такий рецепт вже є в списку улюблених, то на місці AddtoFavorite повинна бути кнопка RemoveFromFavorite,
  const credentials = {
    recipeId: id,
}

  const addToFavorite = () => {
    setFavorite(favorite => !favorite);
      dispatch(addToFavoriteList(credentials))
  };

  return (
    <SectionHero>
      <Container>
        <SectionHeroTitle children={title} />
        <SectionHeroDesc>{description}</SectionHeroDesc>
        {favorites && (
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
              <TimeText>{time} min</TimeText>
            </>
          )}
        </TimeBlock>
      </Container>
    </SectionHero>
  );
};

export default RecipePageHero;
