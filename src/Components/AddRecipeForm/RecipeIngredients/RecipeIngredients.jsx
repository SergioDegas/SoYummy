import { useState } from "react";
// import { nanoid } from "nanoid";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import ingrList from "../../../db/ingredients.json";

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
  IngrList,
  IngrItem,
  IngrNumberLabel,
  NumberInput,
  UnitSelect,
  SelectText,
  UnitList,
  UnitItem,
  DeleteButton,
} from "./RecipeIngredients.styled";

export const RecipeIngredients = ({
  ingredients,
  incrementIngrList,
  decrementIngrList,
  deleteIngr,
  updateIngr,
}) => {
  const unitValues = ["tbs", "tsp", "kg", "g"];
  const [count, setCount] = useState(1);
  const [unitIsActive, setUnitIsActive] = useState(
    new Array(ingredients.length).fill(false)
  );
  const [ingrIsActive, setIngrIsActive] = useState(
    new Array(ingredients.length).fill(false)
  );

  const ingredientsBaseList = ingrList.map((item) => item.ttl);
  const [ingredientsList, setIngredientsList] = useState(ingredientsBaseList);
  const [filteredIngredients, setFilteredIngredients] =
    useState(ingredientsList);

  const incrementCount = () => {
    incrementIngrList();
    setCount((prevState) => prevState + 1);
  };

  const decrementCount = () => {
    if (count === 0) {
      return;
    }
    decrementIngrList();
    setCount((prevState) => prevState - 1);
  };

  const deleteItem = (itemId) => {
    deleteIngr(itemId);
    setCount((prevState) => prevState - 1);
  };

  const toggleUnit = (index) => {
    setUnitIsActive((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const setUnit = (index, value) => {
    setUnitIsActive((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    updateIngr(index, "unitValue", value);
  };

  const unitNumberChange = (index, value) => {
    updateIngr(index, "unitNumber", value);
  };

  const onInputChange = (index, value) => {
    setIngrIsActive((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    updateIngr(index, "ingredient", value);

    setFilteredIngredients(
      ingredientsList.filter((item) => item.includes(value))
    );
  };

  const setIngredient = (index, value) => {
    updateIngr(index, "ingredient", value);

    setIngrIsActive((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const onInputFocusOut = (index) => {
    setTimeout(() => {
      setIngrIsActive((prevState) => {
        const newState = [...prevState];
        newState[index] = false;
        return newState;
      });
    }, 100);
  };

  return (
    <IngredientsWrap>
      <CalcWrap>
        <FormSubtitle>Ingredients</FormSubtitle>
        <Calculator>
          <CalcButtonMinus type="button" onClick={decrementCount}>
            <AiOutlineMinus />
          </CalcButtonMinus>
          <Number>{count}</Number>
          <CalcButtonPlus type="button" onClick={incrementCount}>
            <AiOutlinePlus />
          </CalcButtonPlus>
        </Calculator>
      </CalcWrap>
      <ul>
        {ingredients.map((item, index) => {
          return (
            <IngredientItem key={item.id}>
              <div>
                <IngrInput
                  value={ingredients[index].ingredient}
                  onChange={(e) => onInputChange(index, e.target.value)}
                  onBlur={() => onInputFocusOut(index)}
                />
                {ingrIsActive[index] && (
                  <IngrList>
                    {filteredIngredients.map((item) => (
                      <IngrItem
                        key={item}
                        onClick={() => setIngredient(index, item)}
                      >
                        {item}
                      </IngrItem>
                    ))}
                  </IngrList>
                )}
              </div>
              <IngrNumberLabel>
                <NumberInput
                  type="number"
                  value={item.unitNumber}
                  onChange={(e) => unitNumberChange(index, e.target.value)}
                />
                <UnitSelect onClick={() => toggleUnit(index)}>
                  <SelectText>{ingredients[index].unitValue}</SelectText>
                  <IoIosArrowDown size="18" />
                </UnitSelect>
                {unitIsActive[index] && (
                  <UnitList>
                    {unitValues.map((item) => (
                      <UnitItem key={item} onClick={() => setUnit(index, item)}>
                        {item}
                      </UnitItem>
                    ))}
                  </UnitList>
                )}
              </IngrNumberLabel>
              <DeleteButton type="button" onClick={() => deleteItem(item.id)}>
                <GrClose />
              </DeleteButton>
            </IngredientItem>
          );
        })}
      </ul>
    </IngredientsWrap>
  );
};
