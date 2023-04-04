import { useState } from "react";
import { nanoid } from "nanoid";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

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

export const RecipeIngredients = () => {
  const [ingredients, setIngredients] = useState([
    { id: nanoid(), unitValue: "tbs", unitNumber: "", ingredient: "" },
  ]);
  const [count, setCount] = useState(1);
  const [unitIsActive, setUnitIsActive] = useState(
    new Array(ingredients.length).fill(false)
  );
  const [ingrIsActive, setIngrIsActive] = useState(
    new Array(ingredients.length).fill(false)
  );

  const [ingredientsList,   setIngredientsList ] = useState([
    "banana",
    "avocado",
    "meat",
  ]);

  const [filteredIngredients, setFilteredIngredients] =
    useState(ingredientsList);

  const unitValues = ["tbs", "tsp", "kg", "g"];

  const incrementCount = () => {
    setIngredients((prevState) => [
      ...prevState,
      { id: nanoid(), unitValue: "tbs", unitNumber: "", ingredient: "" },
    ]);
    setCount((prevState) => prevState + 1);
  };

  const decrementCount = () => {
    if (count === 0) {
      return;
    }
    const lastItem = ingredients[ingredients.length - 1];
    setIngredients((prevState) =>
      prevState.filter((item) => {
        return item.id !== lastItem.id;
      })
    );
    setCount((prevState) => prevState - 1);
  };

  const deleteItem = (itemId) => {
    setIngredients(ingredients.filter((item) => item.id !== itemId));
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
    setIngredients((prevState) => {
      const newState = [...prevState];
      newState[index].unitValue = value;
      return newState;
    });
  };

  const unitNumberChange = (index, value) => {
    setIngredients((prevState) => {
      const newIngredients = [...prevState];
      newIngredients[index].unitNumber = value;
      return newIngredients;
    });
  };

  const onInputChange = (index, value) => {
    setIngrIsActive((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    setIngredients((prevState) => {
      const newIngredients = [...prevState];
      newIngredients[index].ingredient = value;
      return newIngredients;
    });

    setFilteredIngredients(
      ingredientsList.filter((item) => item.includes(value))
    );
  };

  const setIngredient = (index, value) => {
    setIngredients((prevState) => {
      const newState = [...prevState];
      newState[index].ingredient = value;
      return newState;
    });

    // setIngrIsActive((prevState) => {
    //   const newState = [...prevState];
    //   newState[index] = false;
    //   return newState;
    // });
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
                  onChange={(event) => onInputChange(index, event.target.value)}
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

              {/* <datalist id="ingredients">
                <option value="Avocado" />
                <option value="Meat" />
                <option value="Strawberry" />
              </datalist> */}
              <IngrNumberLabel>
                <NumberInput
                  type="number"
                  value={item.unitNumber}
                  onChange={(event) =>
                    unitNumberChange(index, event.target.value)
                  }
                />
                {/* <UnitSelect name="unit" id="unit">
                  <option value="tbs">tbs</option>
                  <option value="tsp">tsp</option>
                  <option value="kg">kg</option>
                  <option value="g">g</option>
                </UnitSelect> */}
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
