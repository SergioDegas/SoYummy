import React from "react";
import Container from "Components/Container/Container.styled";
import { RecipesList } from "Components/RecipesList/RecipesList";
import { PageTitle } from "Components/PageTitle/PageTitle";

const recipesInit = [
    {
        _id: "640cd5ac2d9fecf12e8897f5",
        title: "Mediterranean Pasta Salad",
        description:
            "A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice. A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.",
        thumb: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
        time: "27",
    },
    {
        _id: "640cd5ac2d9fecf12e8897f5",
        title: "Mediterranean Pasta Salad",
        description:
            "A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.",
        thumb: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
        time: "27",
    },
    {
        _id: "640cd5ac2d9fecf12e8897f5",
        title: "Mediterranean Pasta Salad",
        description:
            "A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.",
        thumb: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
        time: "27",
    },
];

const MyRecipesPage = () => {
    return (
        // <div>MyRecipesPage</div>
        <Container>
            <PageTitle>My recipes</PageTitle>
            <RecipesList recipes={recipesInit} page="my" />
        </Container>
    );
};

export default MyRecipesPage;
