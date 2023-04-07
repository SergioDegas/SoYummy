import React from "react";
import Container from "Components/Container";
import { PageTitle } from "Components/PageTitle/PageTitle";
import IngredientsTitle from "Components/IngredientsTitle/IngredientsTitle";
import { SectionShoppingList } from "./ShoppingPage.styled";

const ShoppingPage = () => {
  return (
    <SectionShoppingList>
      <Container>
        <PageTitle children="Shopping list" />
        <IngredientsTitle title="Product" action="Remove" />
      </Container>
    </SectionShoppingList>
  );
};

export default ShoppingPage;
