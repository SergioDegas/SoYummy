import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingList } from "redux/shoppingList/operation";
import { selectError, selectIsLoading } from "redux/shoppingList/selectors";
import Container from "Components/Container";
import { PageTitle } from "Components/PageTitle/PageTitle";
import IngredientsTitle from "Components/IngredientsTitle/IngredientsTitle";
import IngredientsShoppingList from "Components/IngredientsShoppingList";
import { SectionShoppingList, PageTitleWrap } from "./ShoppingPage.styled";

const ShoppingPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  return (
    <SectionShoppingList>
      <Container>
        <PageTitleWrap>
          <PageTitle children="Shopping list" />
        </PageTitleWrap>
        <IngredientsTitle title="Product" action="Remove" />
        {isLoading && !error && <p>Loading..</p>}
        {error && <p>{error}</p>}
        {!isLoading && <IngredientsShoppingList />}
      </Container>
    </SectionShoppingList>
  );
};

export default ShoppingPage;
