import { ReactComponent as MinusSvg } from "../../../images/Minus.svg";
import { ReactComponent as PlusSvg } from "../../../images/Plus.svg";
import { ReactComponent as DeleteSvg } from "../../../images/X.svg";
import {
  IngredientsWrap,
  FormSubtitle,
  CalcWrap,
  Calculator,
  CalcButton,
  Number,
  IngredientItem,
  IngrInput,
  IngrNumberLabel,
  NumberInput,
  UnitSelect,
  DeleteButton,
} from "./RecipeIngredients.styled";

export const RecipeIngredients = () => {
  return (
    <IngredientsWrap>
      <CalcWrap>
        <FormSubtitle>Ingredients</FormSubtitle>
        <Calculator>
          <CalcButton type="button">
            <MinusSvg />
          </CalcButton>
          <Number>1</Number>
          <CalcButton type="button">
            <PlusSvg />
          </CalcButton>
        </Calculator>
      </CalcWrap>

      <ul>
        <IngredientItem>
          <IngrInput list="ingredients" />
          <datalist id="ingredients">
            <option value="Avocado" />
            <option value="Meat" />
            <option value="Strawberry" />
          </datalist>
          <IngrNumberLabel>
            <NumberInput type="number" />
            <UnitSelect name="unit" id="unit">
              <option value="tbs">tbs</option>
              <option value="tsp">tsp</option>
              <option value="kg">kg</option>
              <option value="g">g</option>
            </UnitSelect>
          </IngrNumberLabel>

          <DeleteButton type="button">
            <DeleteSvg />
          </DeleteButton>
        </IngredientItem>
      </ul>
    </IngredientsWrap>
  );
};
