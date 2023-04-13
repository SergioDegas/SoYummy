import React from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingList } from "redux/shoppingList/operation";
import { selectError, selectIsLoading } from "redux/shoppingList/selectors";
import Container from "Components/Container";
import Loader from "Components/Loader/Loader";
import { PageTitle } from "Components/PageTitle/PageTitle";
import IngredientsTitle from "Components/IngredientsTitle/IngredientsTitle";
import IngredientsShoppingList from "Components/IngredientsShoppingList";
import { SectionShoppingList, Wrap, Info } from "./ShoppingPage.styled";
import { StyledSquares } from "Components/StyledSquares/StyledSquares";

const ShoppingPage = () => {
  const isMountedRef = useRef(false);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isMountedRef.current) {
      dispatch(fetchShoppingList());
      isMountedRef.current = true;
    }
  }, [dispatch, isMountedRef]);

  return (
    <SectionShoppingList>
      <Container>
        <StyledSquares />

        <Wrap>
          <PageTitle children="Shopping list" />
        </Wrap>
        <Wrap>
          <IngredientsTitle title="Product" action="Remove" />
        </Wrap>
        {isLoading && !error && <Loader />}
        {error && <Info>{error}</Info>}
        {!isLoading && <IngredientsShoppingList />}
      </Container>
    </SectionShoppingList>
  );
};

export default ShoppingPage;
