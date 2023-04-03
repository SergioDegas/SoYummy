// import { useEffect } from "react";
import Container from "../Container";
import {
  SectionIngredients,
  TitleWrap,
  Title,
  TitleTextWrap,
  TitleText,
  IngedientsList,
  IngedientsItem,
  Wrap,
  IngedientsImg,
  IngedientsTitle,
  IngedientsMeasure,
  IngedientsCheck,
  CheckBoxWrap,
  CheckBoxLabel,
  CheckMarkIcon,
} from "./RecipeIngredientsList.styled";
import DefaultIngredientsImg from "images/skeleton/ingredient-img.svg";

import ingridientList from "db/ingredients.json"; //робимо запит за всіма інгрідієнтами useEffect

//TODO
//по кліку на чекбокс додаємо або видаляємо з шопінг ліста інгрідієнти

const RecipeIngredientsList = ({ ingredients }) => {
  const getFilteredIngedients = () => {
    if (!ingredients) {
      return;
    }
    try {
      const filteredArr = ingridientList.filter((obj1) => {
        return ingredients.some((obj2) => obj2.id === obj1._id.$oid);
      });
      return filteredArr;
    } catch (error) {
      console.log(error.message);
    }
  };
  const filteredIngedients = getFilteredIngedients();

  return (
    <SectionIngredients>
      <Container>
        <TitleWrap>
          <Title children="Ingedients" />
          <TitleTextWrap>
            <TitleText>Number</TitleText>
            <TitleText>Add to list</TitleText>
          </TitleTextWrap>
        </TitleWrap>
        <IngedientsList>
          {ingredients &&
            filteredIngedients.map((item) => {
              return (
                <IngedientsItem key={item._id.$oid}>
                  <Wrap>
                    {
                      <IngedientsImg
                        src={item.thb ? item.thb : DefaultIngredientsImg}
                        alt="Ingredient"
                      />
                    }
                    <IngedientsTitle>{item.ttl}</IngedientsTitle>
                  </Wrap>
                  <Wrap>
                    <IngedientsMeasure>
                      {ingredients &&
                        ingredients.find((i) => i.id === item._id.$oid).measure}
                    </IngedientsMeasure>
                    <CheckBoxLabel htmlFor={item.ttl}>
                      <IngedientsCheck type="checkbox" id={item.ttl} />
                      <CheckBoxWrap>
                        <CheckMarkIcon />
                      </CheckBoxWrap>
                    </CheckBoxLabel>
                  </Wrap>
                </IngedientsItem>
              );
            })}
        </IngedientsList>
      </Container>
    </SectionIngredients>
  );
};

export default RecipeIngredientsList;
