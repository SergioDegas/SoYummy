import axios from "axios";
import { PageTitle } from "Components/PageTitle/PageTitle";
import { Container } from "Layout/Footer/FooterStyled";

import { Wrapper } from "./FavoritesPage.styled";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "http://localhost:4000";
const token = localStorage.getItem("token");
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const getRecipeByCategory = async () => {
    const {
        data: { data },
    } = await axios.get(`/user//favorites`);
    return data.favoriteRecipes;
};

const FavoritesPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRecipes = async () => {
            const recipes = await getRecipeByCategory();

            if (!recipes || recipes.length === 0) {
                setError(
                    "We are sorry, but the recipes you were looking for can’t be found."
                );
            }

            setRecipes(recipes);
        };

        getRecipes();
    }, []);

    return (
        <main>
            <Container>
                <section>
                    <Wrapper>
                        <PageTitle>Favorites</PageTitle>
                    </Wrapper>

                    {recipes &&
                        !error &&
                        recipes.map((recipe) => {
                            return (
                                <ul>
                                    <li key={recipe._id}>
                                        <img
                                            src={recipe.thumb}
                                            alt={recipe.title}
                                        />
                                    </li>
                                    <h2>{recipe.title}</h2>
                                    <p>{recipe.description}</p>
                                    <p>{recipe.time} min</p>
                                    <button>Delete</button>
                                    <button>See recipe</button>
                                </ul>
                            );
                        })}
                </section>
            </Container>
        </main>
    );
};

export default FavoritesPage;
