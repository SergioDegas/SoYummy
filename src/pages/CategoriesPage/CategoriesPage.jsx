import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CategoriesList } from "Components/CategoriesList/CategoriesList";
import { PageTitle } from "Components/PageTitle/PageTitle";
import { RecipesCategoryList } from "Components/RecipesCategoryList/RecipesCategoryList";

import Container from "Components/Container/Container.styled";
import { StyledSection, StyledWrapper } from "./CategoriesPage.styled";

axios.defaults.baseURL = "http://localhost:4000";
const token = localStorage.getItem("token");
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const getCategoriesList = async () => {
    const { data } = await axios.get(`/recipes/category-list`);
    return data.categories;
};

const getRecipeByCategory = async (category) => {
    const { data } = await axios.get(`/recipes/category/${category}`);
    return data.recipes;
};

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {
        const getCategories = async () => {
            const categories = await getCategoriesList();
            setCategories(categories);
        };

        const getRecipesByCategories = async (categoryName) => {
            const recipes = await getRecipeByCategory(categoryName);
            setRecipes(recipes);
        };

        getCategories();
        getRecipesByCategories(categoryName);
    }, [categoryName]);

    return (
        <main>
            <Container>
                <StyledSection>
                    <StyledWrapper>
                        <PageTitle>Categories</PageTitle>
                    </StyledWrapper>
                    <CategoriesList categories={categories} />
                    <RecipesCategoryList recipes={recipes} />
                </StyledSection>
            </Container>
        </main>
    );
};

export default CategoriesPage;
