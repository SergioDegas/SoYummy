import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchRecipes, removeRecipe } from "redux/recipes/operation";

import {
    selectRecipes,
    selectError,
    selectLoading,
    selectTotalItems,
} from "redux/recipes/selectors";

import Container from "Components/Container/Container.styled";
import { Wrapper, Section } from "pages/FavoritesPage/FavoritesPage.styled";
import { Error } from "pages/CategoriesPage/CategoriesPage.styled";
import { RecipesList } from "Components/RecipesList/RecipesList";
import { PageTitle } from "Components/PageTitle/PageTitle";
import { WrapperPagination } from "Components/CategoriesRecipes/CategoriesRecipes.styled";
import { CategoryPagePagination } from "Components/CategoryPagination/CategoryPagination";
import Loader from "Components/Loader/Loader";
import { StyledSquares } from "Components/StyledSquares/StyledSquares";

const MyRecipesPage = () => {
    const recipes = useSelector(selectRecipes);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectLoading);
    const totalItems = useSelector(selectTotalItems);

    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(totalItems / 5);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecipes({ page, limit: 5 }));
    }, [dispatch, page]);

    const pageChangeHandler = (page) => {
        setPage(page);
    };

    const removeOwnRecipe = (id) => {
        dispatch(removeRecipe(id));
    };

    return (
        <main>
            <Container>
                <Section>
                    <StyledSquares />

                    <Wrapper>
                        <PageTitle>My recipes</PageTitle>
                    </Wrapper>

                    {isLoading && !error && <Loader />}

                    {recipes.length > 0 && !error && !isLoading && (
                        <RecipesList
                            recipes={recipes}
                            page="my"
                            onDelete={removeOwnRecipe}
                        />
                    )}

                    {recipes.length === 0 && !error && !isLoading && (
                        <Error>
                            We are sorry, but You do not have own recipes.
                        </Error>
                    )}

                    {totalPages > 1 && !isLoading && !error && (
                        <WrapperPagination>
                            <CategoryPagePagination
                                currentPage={page}
                                totalPages={totalPages}
                                onPageChange={(page) => pageChangeHandler(page)}
                            />
                        </WrapperPagination>
                    )}
                </Section>
            </Container>
        </main>
    );
};

export default MyRecipesPage;
