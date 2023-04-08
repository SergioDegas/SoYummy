import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShoppingList } from "redux/shoppingList/selectors";
import {
  fetchShoppingList,
  updateShoppingList,
} from "redux/shoppingList/operation";
import Container from "Components/Container";
import { PageTitle } from "Components/PageTitle/PageTitle";
import IngredientsTitle from "Components/IngredientsTitle/IngredientsTitle";
import { SectionShoppingList, CloseIcon } from "./ShoppingPage.styled";


const ShoppingPage = () => {
  const shoppingList = useSelector(selectShoppingList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  return (
    <SectionShoppingList>
      <Container>
        <PageTitle children="Shopping list" />
        <IngredientsTitle title="Product" action="Remove" />
        <ul>
          {shoppingList.map(({ id, name, image, measure }) => {
            return <li key={id}>
              <img src={image} alt="Ingredient" />
              <p>{name}</p>
              <span>{measure}</span>
              <button type="button">
                <CloseIcon/>
              </button>
            </li>
          })}
        </ul>
      </Container>
    </SectionShoppingList>
  );
};

export default ShoppingPage;
