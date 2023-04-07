import React from "react";
import { useState } from "react";
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

const RecipePageHero = ({ title, description, favorites, time }) => {
  const [favorite, setFavorite] = useState(false);
  //TO DO
  //порівняти айді юзера з айді овнерів з масиву favorites і від того рендерити кнопку
  //можливо робити в головному компоненті ресіпіпейдж, бо проблеми з рендером
  //логіка додавання в фейворіт
  //якщо рецепт власний то кнопку не показувати взагалі
  //Клік по кнопці AddtoFavorite повинен виконувати запит і додавати даний рецепт в список улюблених
  //Якщо такий рецепт вже є в списку улюблених, то на місці AddtoFavorite повинна бути кнопка RemoveFromFavorite,

  const addToFavorite = () => {
    setFavorite(favorite => !favorite);
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
