import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRecipesByCategory } from "redux/categories/operations";

import {
    selectCategoryRecipes,
    selectError,
    selectIsLoading,
    selectTotalPages,
} from "redux/categories/selectors";

import { MainRecipesList } from "Components/MainRecipesList/MainRecipesList";
import { CategoryPagePagination } from "Components/CategoryPagination/CategoryPagination";

import { Error, WrapperPagination } from "./CategoriesRecipes.styled";
import Loader from "Components/Loader/Loader";

const CategoriesRecipes = () => {
    const [page, setPage] = useState(1);
    const [currentCategory, setCurrentCategory] = useState(null);

    const dispatch = useDispatch();
    const { categoryName: category } = useParams();

    const recipes = useSelector(selectCategoryRecipes);
    const totalPages = useSelector(selectTotalPages);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        if (category !== currentCategory) {
            setPage(1);
        }

        setCurrentCategory(category);
        dispatch(fetchRecipesByCategory({ category }));
    }, [dispatch, category, currentCategory]);

    const pageChangeHandler = (page) => {
        setPage(page);

        dispatch(
            fetchRecipesByCategory({
                category,
                page,
            })
        );
    };

    return (
        <>
            {isLoading && !error && <Loader />}
            {recipes.length === 0 && !isLoading && !error && (
                <Error>
                    We are sorry, but the recipes in the category you are
                    looking can’t be found.
                </Error>
            )}
            {recipes.length > 0 && !isLoading && !error && (
                <MainRecipesList recipes={recipes} />
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
        </>
    );
};

export default CategoriesRecipes;
