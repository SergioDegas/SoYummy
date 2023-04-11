import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRecipesBySet } from "redux/categories/operations";
import {
    selectError,
    selectIsLoading,
    selectRecipesSet,
    selectTotalPages,
} from "redux/categories/selectors";

import Hero from "Components/HeroMainPage/Hero";
import { PreviewCategories } from "Components/PreviewCategories/PreviewCategories";
import { WrapperPagination } from "Components/CategoriesRecipes/CategoriesRecipes.styled";
import { MainButton } from "Components/MainButton/MainButton";

import { Section } from "./MainPage.styled";
import { resetRecipesSet } from "redux/categories/slice";

const MainPage = () => {
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const recipes = useSelector(selectRecipesSet);
    const totalPages = useSelector(selectTotalPages);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchRecipesBySet(page));
    }, [dispatch, page]);

    useEffect(() => {
        return () => dispatch(resetRecipesSet());
    }, [dispatch]);

    const otherCategoriesHandler = () => {
        setPage((prevState) => prevState + 1);
    };

    return (
        <main>
            <Hero />
            <Section>
                {recipes.length > 0 && !isLoading && !error && (
                    <PreviewCategories recipes={recipes} />
                )}

                {page < totalPages && (
                    <WrapperPagination>
                        <MainButton onClick={otherCategoriesHandler}>
                            Other categories
                        </MainButton>
                    </WrapperPagination>
                )}
            </Section>
        </main>
    );
};

export default MainPage;
