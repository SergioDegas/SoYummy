import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import  {selectRecipes, selectSearchStatus, selectSearchError}  from '../../redux/search/selectors';
import  SearchRecipePage  from "../SearchedRecipesList/SearchRecipePage";
import { Item, LinkStyle, List } from "./SearchedRecipesList.styled";
// import SearchPagination from "../SearchPagination";
// import { searchRecipes } from "../../redux/search/operation";


const SearchedRecipesList = () => {
    const location = useLocation();
    

    const recipes = useSelector(selectRecipes);
    // const isLoading = useSelector(selectSearchStatus);
    // const error = useSelector(selectSearchError);

    


   
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

            {/* {totalPages > 1 && !isLoading && !error && (
                <WrapperPagination>
                    <SearchPagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={(page) => pageChangeHandler(page)}
                    />
                </WrapperPagination>
                )} */}
        </List>
    );
};

export default SearchedRecipesList;