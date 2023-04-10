import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectShoppingList } from "redux/shoppingList/selectors";
import { updateShoppingList } from "redux/shoppingList/operation";
import {
  IngedientsItem,
  Wrap,
  IngedientsImgThumb,
  Img,
  IngedientsTitle,
  IngedientsMeasure,
  Button,
  CloseIcon,
  ImgEmptyPageThumb,
  Text,
} from "./IngredientsShoppingList.styled.js";
import DefaultIngredientsImg from "images/skeleton/ingredient-img.svg";
import EmptyPageImg from "images/skeleton/vegetable-fruit-basket-mob.png";

const IngredientsShoppingList = () => {
  const shoppingList = useSelector(selectShoppingList);
  const dispatch = useDispatch();

  const handleDelete = (id, measure) => {
    const credentials = { measure: measure, ingredientId: id };
    dispatch(updateShoppingList(credentials));
  };
  const handleDeleteIngredient = (id, measure) => {
    handleDelete(id, measure);
  };

  return (
    <>
      {shoppingList.length !== 0 ? (
        <ul>
          {shoppingList.map(({ id, name, image, measure }) => {
            return (
              <IngedientsItem key={id}>
                <Wrap>
                  <IngedientsImgThumb>
                    <Img
                      src={image ? image : DefaultIngredientsImg}
                      alt="Ingredient"
                    />
                  </IngedientsImgThumb>
                  <IngedientsTitle>{name}</IngedientsTitle>
                </Wrap>
                <Wrap>
                  <IngedientsMeasure>{measure}</IngedientsMeasure>
                  <Button
                    type="button"
                    onClick={() => handleDeleteIngredient(id, measure)}
                  >
                    <CloseIcon />
                  </Button>
                </Wrap>
              </IngedientsItem>
            );
          })}
        </ul>
      ) : (
        <>
          <ImgEmptyPageThumb>
            <Img src={EmptyPageImg} alt="Friut Basket" />
          </ImgEmptyPageThumb>

          <Text>You don't have any products in your shopping list yet...</Text>
        </>
      )}
    </>
  );
};

export default IngredientsShoppingList;
