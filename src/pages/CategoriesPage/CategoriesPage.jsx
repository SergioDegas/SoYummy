import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CategoriesList } from "Components/CategoriesList/CategoriesList";
import { PageTitle } from "Components/PageTitle/PageTitle";
import { MainRecipesList } from "Components/MainRecipesList/MainRecipesList";

import Container from "Components/Container/Container.styled";
import {
    Error,
    Section,
    WrapperPagination,
    WrapperTitle,
} from "./CategoriesPage.styled";
import { CategoryPagePagination } from "Components/CategoryPagination/CategoryPagination";

axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Mjk5NzAwNjU4NDRjZDJjZTE4MmZkYiIsImVtYWlsIjoidXNlckBtYWlsLmNvbSIsImlhdCI6MTY4MDc4OTk5NSwiZXhwIjoxNjgwODcyNzk1fQ.hNXiTgoOKAwfhkEMwsjzS1Av4ciCVB5Ud9lvprgqvLY`;

const getCategoriesList = async () => {
    const { data } = await axios.get(`/recipes/category-list`);

    return data.categories;
};

const getRecipeByCategory = async (category, page) => {
    const { data } = await axios.get(
        `/recipes/category/${category}?page=${page}`
    );

    return data;
};

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [error, setError] = useState(null);

    const { categoryName } = useParams();

    useEffect(() => {
        const getCategories = async () => {
            const categories = await getCategoriesList();
            setCategories(categories);
        };

        const getRecipesByCategories = async (categoryName, page) => {
            setError(null);

            if (categoryName !== currentCategory) {
                setCurrentPage(1);
            }
            setCurrentCategory(categoryName);

            const data = await getRecipeByCategory(categoryName, page);

            if (!data || data.recipes.length === 0) {
                setError(
                    "We are sorry, but the recipes in the category you were looking can’t be found."
                );
            }

            setRecipes(data.recipes);
            setTotalPages(data.totalPages);
        };

        getCategories();
        getRecipesByCategories(categoryName, currentPage);
    }, [categoryName, currentCategory, currentPage]);

    return (
        <main>
            <Container>
                <Section>
                    <WrapperTitle>
                        <PageTitle>Categories</PageTitle>
                    </WrapperTitle>
                    <CategoriesList categories={categories} />

                    {error && <Error>{error}</Error>}
                    {!error && <MainRecipesList recipes={recipes} />}
                    {totalPages > 1 && (
                        <WrapperPagination>
                            <CategoryPagePagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={(page) => setCurrentPage(page)}
                            />
                        </WrapperPagination>
                    )}
                </Section>
            </Container>
        </main>
    );
};

export default CategoriesPage;
