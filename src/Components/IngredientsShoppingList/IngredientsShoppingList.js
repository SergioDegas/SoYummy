import React from "react";
import { useDispatch } from "react-redux";
import { useMedia } from "hooks/useMedia.js";
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
import EmptyPageImgMob from "images/skeleton/vegetable-fruit-basket-mob.png";
import EmptyPageImgTab from "images/skeleton/vegetable-fruit-basket-tab.png";

const IngredientsShoppingList = ({shoppingList}) => {
  const dispatch = useDispatch();
  const { isMobileScreen } = useMedia();

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
            <Img src={isMobileScreen ? EmptyPageImgMob : EmptyPageImgTab} alt="Friut Basket" />
          </ImgEmptyPageThumb>

          <Text>You don't have any products in your shopping list yet...</Text>
        </>
      )}
    </>
  );
};

export default IngredientsShoppingList;
