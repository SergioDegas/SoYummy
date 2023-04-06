import React from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from "react";
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

const token = localStorage.getItem("token");
const getShoppingList = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:4000/user/shopping-list",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.shoppingList;
  } catch (error) {
    console.log(error.message);
  }
};

const updateShoppingList = async (credentials) => {
  try {
    const response = await axios.patch(
      "http://localhost:4000/user/shopping-list",
      credentials,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const RecipeIngredientsList = ({ ingredients }) => {
  const [selectedIngredientIds, setSelectedIngredientIds] = useState([]);
  useEffect(() => {
    async function getIngredientsIds() {
      try {
        // setIsLoading(true);
        const shoppingList = await getShoppingList();
        const ids = shoppingList.map(item => { 
          return item._id
        });
        setSelectedIngredientIds(ids);
        // setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getIngredientsIds();
  }, []);

  const handleInputChange = (evt) => {
    const { id, checked } = evt.target;
    setSelectedIngredientIds((prevSelectedIds) => {
      if (checked) {
        return [...prevSelectedIds, id];
      } else {
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      }
    });

    const currentIngredient = ingredients.find((item) => item._id === id);
    const { measure, _id } = currentIngredient;
    const credentials = { amount: measure, id: _id }
    updateShoppingList(credentials);
  };

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
                    <CheckBoxLabel htmlFor={_id}>
                      <IngedientsCheck
                        type="checkbox"
                        checked={selectedIngredientIds.includes(_id)}
                        id={_id}
                        value={_id}
                        onChange={handleInputChange}
                      />
                      <CheckBoxWrap>
                        <CheckMarkIcon />
                      </CheckBoxWrap>
                    </CheckBoxLabel>
                  </Wrap>
                </IngedientsItem>
              );
            })}
        </IngedientsList>
        <Toaster />
      </Container>
    </SectionIngredients>
  );
};

export default RecipeIngredientsList;
