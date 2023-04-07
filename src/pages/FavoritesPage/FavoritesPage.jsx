import axios from "axios";
import { PageTitle } from "Components/PageTitle/PageTitle";
import Container from "Components/Container/Container.styled";

import { Section, Wrapper } from "./FavoritesPage.styled";
import { useEffect, useState } from "react";

import { RecipesList } from "Components/RecipesList/RecipesList";

axios.defaults.baseURL = "http://localhost:4000";
const token = localStorage.getItem("token");
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

// const getRecipeByCategory = async () => {
//     const {
//         data: { data },
//     } = await axios.get(`/user/favorites`);
//     return data.favoriteRecipes;
// };

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

const FavoritesPage = () => {
    const [recipes, setRecipes] = useState(recipesInit);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const getRecipes = async () => {
    //         const recipes = await getRecipeByCategory();

    //         if (!recipes || recipes.length === 0) {
    //             setError(
    //                 "We are sorry, but the recipes you were looking for can’t be found."
    //             );
    //         }

    //         setRecipes(recipes);
    //     };

    //     getRecipes();
    // }, []);

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
