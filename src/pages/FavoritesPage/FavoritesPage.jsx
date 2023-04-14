import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectFavoriteRecipes,
  selectTotalItems,
} from "redux/favorite/selectors";
import { selectError, selectIsLoading } from "redux/categories/selectors";

import { fetchFavoriteRecipesList } from "redux/favorite/operations";
import { addToFavoriteList } from "redux/auth/operation";

import { PageTitle } from "Components/PageTitle/PageTitle";
import Loader from "Components/Loader/Loader";
import { RecipesList } from "Components/RecipesList/RecipesList";
import Container from "Components/Container/Container.styled";
import { CategoryPagePagination } from "Components/CategoryPagination/CategoryPagination";
import { StyledSquares } from "Components/StyledSquares/StyledSquares";

import { Error, Section, Wrapper } from "./FavoritesPage.styled";
import { WrapperPagination } from "Components/CategoriesRecipes/CategoriesRecipes.styled";

const PAGE_LIMIT = 4;

const FavoritesPage = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const favoriteRecipesId = useSelector(
    (state) => state.auth.user.favoriteRecipes
  );
  const favoriteRecipes = useSelector(selectFavoriteRecipes);
  const totalItems = useSelector(selectTotalItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const totalPages = Math.ceil(totalItems / PAGE_LIMIT);

  console.log(favoriteRecipesId);

  useEffect(() => {
    dispatch(fetchFavoriteRecipesList({ page, limit: PAGE_LIMIT }));
  }, [dispatch, page]);

  useEffect(() => {
    if (favoriteRecipesId && favoriteRecipesId.length <= PAGE_LIMIT) {
      setPage(1);
    }
  }, [favoriteRecipesId]);

  const deleteRecipeFromFavorites = (id) => {
    dispatch(addToFavoriteList({ recipeId: id }));
  };

  const pageChangeHandler = (page) => {
    setPage(page);
  };

  return (
    <main>
      <Container>
        <Section>
          <StyledSquares />

          <Wrapper>
            <PageTitle>Favorites</PageTitle>
          </Wrapper>

          {isLoading && !error && <Loader />}

          {favoriteRecipes.length === 0 && !isLoading && !error && (
            <Error>
              We are sorry, but You do not have any favorite recipes yet.
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
