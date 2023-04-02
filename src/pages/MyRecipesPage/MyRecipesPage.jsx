import React from "react";
import Container from "Components/Container/Container.styled";
import { RecipesList } from "Components/RecipesList/RecipesList";
const MyRecipesPage = () => {
    return (
      // <div>MyRecipesPage</div>
      <Container>
        <RecipesList/>
      </Container>
  )
};

export default MyRecipesPage;