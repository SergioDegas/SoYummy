import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { PageTitle } from "Components/PageTitle/PageTitle";
import { RecipesCategoryList } from "Components/RecipesCategoryList/RecipesCategoryList";

import Container from "Components/Container/Container.styled";
import {
    Button,
    RecipesCategoryListStyled,
    StyledItem,
    StyledList,
} from "./PreviewCategories.styled";
import { useMedia } from "hooks";

axios.defaults.baseURL = "http://localhost:4000";
const token = localStorage.getItem("token");
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const getMainPageSet = async () => {
    const { data } = await axios.get(`/recipes/main-page`);
    return data.result;
};

export const PreviewCategories = () => {
    const [recipesSet, setRecipesSet] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const getRecipes = async () => {
            const recipes = await getMainPageSet();
            setRecipesSet(recipes);
        };

        getRecipes();
    }, []);

    const media = useMedia();
    const recipeListByMediaHandle = (recipes) => {
        if (media.isMobileScreen) {
            return recipes.slice(0, 1);
        }

        if (media.isTabletScreen) {
            return recipes.slice(0, 2);
        }
        return recipes;
    };

    return (
        <section>
            <Container>
                {recipesSet && (
                    <StyledList>
                        {recipesSet.map(({ _id, recipes }) => {
                            return (
                                <StyledItem key={_id}>
                                    <PageTitle>{_id}</PageTitle>
                                    <RecipesCategoryList
                                        recipes={recipeListByMediaHandle(
                                            recipes
                                        )}
                                    />
                                    <Button
                                        to={`/categories/${_id}`}
                                        state={{ from: location }}
                                    >
                                        See all
                                    </Button>
                                </StyledItem>
                            );
                        })}
                    </StyledList>
                )}
            </Container>
        </section>
    );
};
