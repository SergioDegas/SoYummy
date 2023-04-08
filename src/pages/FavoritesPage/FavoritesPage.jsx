import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteRecipes } from "redux/favorite/selectors";
import { selectError, selectIsLoading } from "redux/categories/selectors";
import { fetchFavoriteRecipesList } from "redux/favorite/operations";

import { PageTitle } from "Components/PageTitle/PageTitle";
import { RecipesList } from "Components/RecipesList/RecipesList";
import Container from "Components/Container/Container.styled";

import { Error, Section, Wrapper } from "./FavoritesPage.styled";

const FavoritesPage = () => {
    const dispatch = useDispatch();
    const favoriteRecipes = useSelector(selectFavoriteRecipes);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchFavoriteRecipesList());
    }, [dispatch]);

    return (
        <main>
            <Container>
                <Section>
                    <Wrapper>
                        <PageTitle>Favorites</PageTitle>
                    </Wrapper>

                    {favoriteRecipes.length === 0 && !isLoading && !error && (
                        <Error>
                            We are sorry, but You do not have any favorite
                            recipes yet.
                        </Error>
                    )}

                    {favoriteRecipes.length > 0 && !error && !isLoading && (
                        <RecipesList
                            recipes={favoriteRecipes}
                            page="favorite"
                        />
                    )}
                </Section>
            </Container>
        </main>
    );
};

export default FavoritesPage;
