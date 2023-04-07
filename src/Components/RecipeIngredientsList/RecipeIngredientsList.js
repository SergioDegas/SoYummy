import IngredientsTitle from "Components/IngredientsTitle/IngredientsTitle";
import Container from "../Container";
import {
  SectionIngredients,
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

const RecipeIngredientsList = ({ ingredients }) => {
  return (
    <SectionIngredients>
      <Container>
        <IngredientsTitle title="Ingedients" action="Add to list"/>
        <IngedientsList>
          {ingredients &&
            ingredients.map(({ image, _id, measure, name }) => {
              return (
                <IngedientsItem key={_id}>
                  <Wrap>
                    {
                      <IngedientsImg
                        src={image ? image : DefaultIngredientsImg}
                        alt="Ingredient"
                      />
                    }
                    <IngedientsTitle>{name}</IngedientsTitle>
                  </Wrap>
                  <Wrap>
                    <IngedientsMeasure>{measure}</IngedientsMeasure>
                    <CheckBoxLabel htmlFor={name}>
                      <IngedientsCheck type="checkbox" id={name} />
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
