import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/auth/selectors";
import { getRecipes } from "redux/recipes/selectors";
import Container from "../Container";
import {
    addToFavoriteList,
    fetchFavoriteRecipesList,
} from "redux/favorite/operations";
import {
    SectionHero,
    SectionHeroTitle,
    SectionHeroDesc,
    SectionHeroBtn,
    TimeBlock,
    TimeText,
} from "./RecipePageHero.styled";
import { BsClock } from "react-icons/bs";

const RecipePageHero = ({ id, title, description, time }) => {
    const [favorite, setFavorite] = useState(false);

    const ownRecipes = useSelector(getRecipes);
    const isOwnRecipe = ownRecipes.includes(id);
    const { favoriteRecipes } = useSelector(selectUser);

    const dispatch = useDispatch();

    useEffect(() => {
        const isRecipeFavorite = favoriteRecipes.includes(id);
        setFavorite(isRecipeFavorite);
        dispatch(fetchFavoriteRecipesList());
    }, [id, favoriteRecipes, dispatch]);

    const addToFavorite = () => {
        setFavorite((favorite) => !favorite);
        const credentials = {
            recipeId: id,
        };
        dispatch(addToFavoriteList(credentials));
    };

    return (
        <SectionHero>
            <Container>
                <SectionHeroTitle children={title} />
                <SectionHeroDesc>{description}</SectionHeroDesc>
                {!isOwnRecipe && (
                    <SectionHeroBtn
                        type="button"
                        aria-label="Add to favorite"
                        onClick={() => {
                            addToFavorite();
                        }}
                    >
                        {favorite
                            ? "Remove from favorite recipes"
                            : "Add to favorite recipes"}
                    </SectionHeroBtn>
                )}
                <TimeBlock>
                    {time && (
                        <>
                            <BsClock size="14px" fill="#23262A" />
                            <TimeText>{time} min</TimeText>
                        </>
                    )}
                </TimeBlock>
            </Container>
        </SectionHero>
    );
};

export default RecipePageHero;
