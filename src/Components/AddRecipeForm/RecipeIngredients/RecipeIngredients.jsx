import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIngredientsList } from "../../../redux/ingredients/selectors";
import { fetchIngredientsList } from "../../../redux/ingredients/operation";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

import {
  IngredientsWrap,
  FormSubtitle,
  CountWrap,
  Counter,
  MinusButton,
  PlusButton,
  Number,
  IngredientItem,
  InputWrap,
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
  Error,
  NumberError,
} from "./RecipeIngredients.styled";

export const RecipeIngredients = ({
  ingredients,
  incrementIngrList,
  decrementIngrList,
  deleteIngr,
  updateIngr,
  errors,
  updateErrors,
}) => {
  const unitValues = ["tbs", "tsp", "kg", "g"];
  const [count, setCount] = useState(1);
  const [unitIsActive, setUnitIsActive] = useState(
    new Array(ingredients.length).fill(false)
  );
  const [ingrIsActive, setIngrIsActive] = useState(
    new Array(ingredients.length).fill(false)
  );

  const dispatch = useDispatch();
  const ingredientsList = useSelector(getIngredientsList).map(ingr => ingr.name);

  useEffect(() => {
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  
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
    localStorage.setItem(
      "count",
      setCount((prevState) => prevState + 1)
    );
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
    updateErrors([`ingredients[${index}].unitNumber`]);
  };

  const onInputChange = (index, value) => {
    setIngrIsActive((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    updateIngr(index, "ingredient", value);

    setFilteredIngredients(
      ingredientsList.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    );

    updateErrors([`ingredients[${index}].ingredient`]);
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
      <CountWrap>
        <FormSubtitle>Ingredients</FormSubtitle>
        <Counter>
          <MinusButton type="button" onClick={decrementCount}>
            <AiOutlineMinus />
          </MinusButton>
          <Number>{count}</Number>
          <PlusButton type="button" onClick={incrementCount}>
            <AiOutlinePlus />
          </PlusButton>
        </Counter>
      </CountWrap>
      <ul>
        {ingredients.map((item, index) => {
          return (
            <IngredientItem key={item.id}>
              <InputWrap>
                <div>
                  <IngrInput
                    value={ingredients[index].ingredient}
                    onChange={(e) => onInputChange(index, e.target.value)}
                    onBlur={() => onInputFocusOut(index)}
                  />
                  {errors[`ingredients[${index}].ingredient`] && (
                    <Error>{errors[`ingredients[${index}].ingredient`]}</Error>
                  )}
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
                        <UnitItem
                          key={item}
                          onClick={() => setUnit(index, item)}
                        >
                          {item}
                        </UnitItem>
                      ))}
                    </UnitList>
                  )}
                  {errors[`ingredients[${index}].unitNumber`] && (
                    <NumberError>
                      {errors[`ingredients[${index}].unitNumber`]}
                    </NumberError>
                  )}
                </IngrNumberLabel>
              </InputWrap>
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
