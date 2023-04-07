import React from "react";
import Container from "Components/Container/Container.styled";
import { RecipesList } from "Components/RecipesList/RecipesList";
import { PageTitle } from "Components/PageTitle/PageTitle";

const MyRecipesPage = () => {
    return (
        // <div>MyRecipesPage</div>
        <Container>
            <PageTitle>My recipes</PageTitle>
            <RecipesList recipes={[]} page="my" />
        </Container>
    );
};

export default MyRecipesPage;
