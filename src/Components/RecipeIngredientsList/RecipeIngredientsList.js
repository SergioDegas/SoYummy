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

//TODO
//по кліку на чекбокс додаємо або видаляємо з шопінг ліста інгрідієнти

const RecipeIngredientsList = ({ ingredients }) => {
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
