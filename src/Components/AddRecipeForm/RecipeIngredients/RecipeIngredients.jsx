import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

import {
  IngredientsWrap,
  FormSubtitle,
  CalcWrap,
  Calculator,
  CalcButtonMinus,
  CalcButtonPlus,
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
          <CalcButtonMinus type="button">
            <AiOutlineMinus />
          </CalcButtonMinus>
          <Number>1</Number>
          <CalcButtonPlus type="button">
            <AiOutlinePlus />
          </CalcButtonPlus>
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
            <GrClose />
          </DeleteButton>
        </IngredientItem>
      </ul>
    </IngredientsWrap>
  );
};
