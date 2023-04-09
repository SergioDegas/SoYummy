import React from "react";
import { useLocation } from "react-router";
import { useSelector } from 'react-redux';
import  {selectRecipes}  from '../../redux/search/selectors';
import { MainRecipeCard } from "Components/MainRecipeCard/MainRecipeCard";
import { ItemStyled, LinkStyled, ListStyled } from "./SearchedRecipesList.styled";

const SearchedRecipesList = () => {
    const location = useLocation();
    const recipes = useSelector(selectRecipes);

    return (
        <ListStyled>
            {recipes.map((recipe) => {
                return (
                    <ItemStyled key={recipe._id}>
                        <LinkStyled
                            to={`/search/${recipe._id}`}
                            state={{ from: location }}
                        >
                            <MainRecipeCard recipe={recipe} />
                        </LinkStyled>
                    </ItemStyled>
                );
            })}
        </ListStyled>
    );
};

export default SearchedRecipesList;