import { CategoriesList } from "Components/CategoriesList/CategoriesList";
import Container from "Components/Container/Container.styled";
import { RecipesCategoryList } from "Components/RecipesCategoryList/RecipesCategoryList";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Mjk5NzAwNjU4NDRjZDJjZTE4MmZkYiIsImVtYWlsIjoidXNlckBtYWlsLmNvbSIsImlhdCI6MTY4MDU0NTEzNCwiZXhwIjoxNjgwNjI3OTM0fQ.Hnv0syQhMjn5Pe7hfJR7To1sfzRabrRZdsXfg9SiCgc`;

const getCategoriesList = async () => {
    const { data } = await axios.get(`/recipes/category-list`);
    return data.categories;
};

const getRecipeByCategory = async (category) => {
    const { data } = await axios.get(`/recipes/category/${category}`);
    console.log(data.recipes);
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
                <section>
                    <h1>Categories</h1>
                    <CategoriesList categories={categories} />
                    <RecipesCategoryList recipes={recipes} />
                </section>
            </Container>
        </main>
    );
};

export default CategoriesPage;
