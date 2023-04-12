import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingList } from "redux/shoppingList/operation";
import {
  selectShoppingList,
  selectError,
  selectIsLoading,
} from "redux/shoppingList/selectors";
import Container from "Components/Container";
import Loader from "Components/Loader/Loader";
import { PageTitle } from "Components/PageTitle/PageTitle";
import IngredientsTitle from "Components/IngredientsTitle/IngredientsTitle";
import IngredientsShoppingList from "Components/IngredientsShoppingList";
import { SectionShoppingList, Wrap, Info } from "./ShoppingPage.styled";

const ShoppingPage = () => {
  const shoppingList = useSelector(selectShoppingList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    if (shoppingList.length === 0) {
      dispatch(fetchShoppingList());
    }
  }, [dispatch, shoppingList]);

  return (
    <SectionShoppingList>
      <Container>
        <Wrap>
          <PageTitle children="Shopping list" />
        </Wrap>
        <Wrap>
          <IngredientsTitle title="Product" action="Remove" />
        </Wrap>
        {isLoading && !error && <Loader />}
        {error && <Info>{error}</Info>}
        {!isLoading && <IngredientsShoppingList shoppingList={shoppingList} />}
      </Container>
    </SectionShoppingList>
  );
};

export default ShoppingPage;
