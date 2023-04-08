import axios from "axios";
import { PageTitle } from "Components/PageTitle/PageTitle";
import Container from "Components/Container/Container.styled";

import { Section, Wrapper } from "./FavoritesPage.styled";
import { useEffect, useState } from "react";

import { RecipesList } from "Components/RecipesList/RecipesList";

axios.defaults.baseURL = "http://localhost:4000";
const token = localStorage.getItem("token");
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const recipesInit = [
    {
        _id: "1",
        title: "Mediterranean Pasta Salad",
        description:
            "A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.\nA salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.",
        thumb: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
        time: "27",
    },
    {
        _id: "2",
        title: "Mediterranean Pasta Salad",
        description:
            "A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.",
        thumb: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
        time: "27",
    },
    {
        _id: "3",
        title: "Mediterranean Pasta Salad",
        description:
            "A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.",
        thumb: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
        time: "27",
    },
];

const FavoritesPage = () => {
    const [recipes, setRecipes] = useState(recipesInit);
    const [error, setError] = useState(null);

    return (
        <main>
            <Container>
                <Section>
                    <Wrapper>
                        <PageTitle>Favorites</PageTitle>
                    </Wrapper>

                    {recipes && !error && (
                        <RecipesList recipes={recipes} page="favorite" />
                    )}
                </Section>
            </Container>
        </main>
    );
};

export default FavoritesPage;
