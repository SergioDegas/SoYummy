import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
    selectFavoriteRecipes,
    selectTotalItems,
} from "redux/favorite/selectors";
import { selectError, selectIsLoading } from "redux/categories/selectors";
import {
    addToFavoriteList,
    fetchFavoriteRecipesList,
} from "redux/favorite/operations";

import { PageTitle } from "Components/PageTitle/PageTitle";
import { RecipesList } from "Components/RecipesList/RecipesList";
import Container from "Components/Container/Container.styled";

import { Error, Section, Wrapper } from "./FavoritesPage.styled";
import { WrapperPagination } from "Components/CategoriesRecipes/CategoriesRecipes.styled";
import { CategoryPagePagination } from "Components/CategoryPagination/CategoryPagination";

const FavoritesPage = () => {
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const favoriteRecipes = useSelector(selectFavoriteRecipes);
    const totalItems = useSelector(selectTotalItems);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const totalPages = Math.ceil(totalItems / 4);

    useEffect(() => {
        dispatch(fetchFavoriteRecipesList({ limit: 4 }));
    }, [dispatch, favoriteRecipes]);

    const deleteRecipeFromFavorites = (id) => {
        dispatch(addToFavoriteList({ recipeId: id }));
    };

    const pageChangeHandler = (page) => {
        setPage(page);
        dispatch(fetchFavoriteRecipesList({ page, limit: 4 }));
    };

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
                            onDelete={deleteRecipeFromFavorites}
                        />
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

export default FavoritesPage;
