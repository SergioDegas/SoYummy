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
  //TO DO
  //порівняти айді юзера з айді овнерів з масиву favorites і від того рендерити кнопку
  //можливо робити в головному компоненті ресіпіпейдж, бо проблеми з рендером
  //логіка додавання в фейворіт
  //якщо рецепт власний то кнопку не показувати взагалі
  //Клік по кнопці AddtoFavorite повинен виконувати запит і додавати даний рецепт в список улюблених
  //Якщо такий рецепт вже є в списку улюблених, то на місці AddtoFavorite повинна бути кнопка RemoveFromFavorite,

  const addToFavorite = () => {
    console.log("add");
  };

  return (
    <SectionHero>
      <Container>
        <SectionHeroTitle children={title} />
        <SectionHeroDesc>{description}</SectionHeroDesc>
        {favorites && (
          <SectionHeroBtn type="button" aria-label="Add to favorite"
            onClick={() => {
              addToFavorite();
            }}
          >
            Add to favorite recipes
          </SectionHeroBtn>
        )}
        <TimeBlock>
          <BsClock size="14px" fill="#23262A" />
          <TimeText>{time} min</TimeText>
        </TimeBlock>
      </Container>
    </SectionHero>
  );
};

export default RecipePageHero;
