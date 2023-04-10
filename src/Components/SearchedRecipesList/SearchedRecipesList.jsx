import React from "react";
import { useLocation } from "react-router";
import { useSelector } from 'react-redux';
import  {selectRecipes}  from '../../redux/search/selectors';
import  SearchRecipePage  from "../SearchedRecipesList/SearchRecipePage";
import { ItemStyled, LinkStyled, ListStyled } from "./SearchedRecipesList.styled";

const SearchedRecipesList = () => {
    const location = useLocation();
    const recipes = useSelector(selectRecipes());
    console.log("RecipesList", recipes);
    
   
    return (
        <ListStyled>
            {recipes.map((recipe) => {
                return (
                    <ItemStyled key={recipe._id}>
                        <LinkStyled
                            to={`/recipe/${recipe._id}`}
                            state={{ from: location }}
                        >
                            <SearchRecipePage recipe={recipe} />
                        </LinkStyled>
                    </ItemStyled>
                );
            })}
        </ListStyled>
    );
};

export default SearchedRecipesList;