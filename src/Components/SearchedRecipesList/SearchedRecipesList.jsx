import React from "react";
import { useLocation } from "react-router";
import { useSelector } from 'react-redux';
import  {selectRecipes}  from '../../redux/search/selectors';
import  SearchRecipePage  from "../SearchedRecipesList/SearchRecipePage";
import { Item, LinkStyle, List } from "./SearchedRecipesList.styled";

const SearchedRecipesList = () => {
    const location = useLocation();
    const recipes = useSelector(selectRecipes);
    
   
    return (
        <List>
            {recipes.map((recipe) => {
                return (
                    <Item key={recipe._id}>
                        <LinkStyle
                            to={`/recipe/${recipe._id}`}
                            state={{ from: location }}
                        >
                            <SearchRecipePage recipe={recipe} />
                        </LinkStyle>
                    </Item>
                );
            })}
        </List>
    );
};

export default SearchedRecipesList;