import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes, removeRecipe } from "redux/recipes/operation";
import { getRecipes, isError,  } from "redux/recipes/selectors";
import Container from "Components/Container/Container.styled";
import { Wrapper, Section } from "pages/FavoritesPage/FavoritesPage.styled";
import { Error } from "pages/CategoriesPage/CategoriesPage.styled";
import { RecipesList } from "Components/RecipesList/RecipesList";
import { PageTitle } from "Components/PageTitle/PageTitle";

const MyRecipesPage = () => {
    const recipes = useSelector(getRecipes);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    const removeOwnRecipe = (id) => {
        dispatch(removeRecipe(id));
    };

    return (
        <main>
            <Container>
                <Section>
                    <Wrapper>
                        <PageTitle>My recipes</PageTitle>
                    </Wrapper>
                    {recipes.length > 0 && isError && (
                        <RecipesList
                            recipes={recipes}
                            page="my"
                            onDeleteOwnRecipe={removeOwnRecipe}
                        />
                    )}
                    {recipes.length === 0 && (
                        <Error>
                            We are sorry, but You do not have own recipes.
                        </Error>
                    )}
                </Section>
            </Container>
        </main>
    );
};

export default MyRecipesPage;
