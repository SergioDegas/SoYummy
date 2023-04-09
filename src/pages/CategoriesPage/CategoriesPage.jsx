import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    selectCategoryList,
    selectCategoryRecipes,
    selectCategoryTotalPages,
    selectIsLoading,
    selectError,
} from "redux/categories/selectors";
import {
    fetchCategoryList,
    fetchRecipesByCategory,
} from "redux/categories/operations";

import { PageTitle } from "Components/PageTitle/PageTitle";
import { CategoriesList } from "Components/CategoriesList/CategoriesList";
import { MainRecipesList } from "Components/MainRecipesList/MainRecipesList";
import { CategoryPagePagination } from "Components/CategoryPagination/CategoryPagination";

import Container from "Components/Container/Container.styled";
import {
    Error,
    Section,
    WrapperPagination,
    WrapperTitle,
} from "./CategoriesPage.styled";

const CategoriesPage = () => {
    const [page, setPage] = useState(1);
    const [currentCategory, setCurrentCategory] = useState(null);

    const { categoryName: category } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categoryList = useSelector(selectCategoryList);
    const recipes = useSelector(selectCategoryRecipes);
    const totalPages = useSelector(selectCategoryTotalPages);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchCategoryList());

        if (category !== currentCategory) {
            setPage(1);
        }
        if (error) {
            navigate("/not-found");
        }

        setCurrentCategory(category);
        dispatch(fetchRecipesByCategory({ category, page }));
    }, [dispatch, category, page, currentCategory, error, navigate]);

    return (
        <main>
            <Container>
                <Section>
                    <WrapperTitle>
                        <PageTitle>Categories</PageTitle>
                    </WrapperTitle>
                    {categoryList.length > 0 && !isLoading && !error && (
                        <CategoriesList categories={categoryList} />
                    )}

                    {recipes.length === 0 && !isLoading && !error && (
                        <Error>
                            We are sorry, but the recipes in the category you
                            are looking can’t be found.
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
                                onPageChange={(page) => setPage(page)}
                            />
                        </WrapperPagination>
                    )}
                </Section>
            </Container>
        </main>
    );
};

export default CategoriesPage;
