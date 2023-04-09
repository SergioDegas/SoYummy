import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
    fetchCategoryList,
    fetchRecipesByCategory,
    fetchRecipesBySet,
} from "./operations";

const initialState = {
    categoryList: [],
    recipes: [],
    recipesSet: [],
    totalPages: null,
    isLoading: false,
    error: null,
};

const extraActions = [fetchCategoryList, fetchRecipesByCategory];
const getActions = (type) =>
    isAnyOf(...extraActions.map((action) => action[type]));

const fetchCategoryListFulfilledReducer = (state, action) => {
    state.categoryList = action.payload;
};

const fetchRecipesByCategoryFulfilledReducer = (state, action) => {
    state.recipes = action.payload.recipes;
    state.totalPages = action.payload.totalPages;
};

const fetchRecipesBySetFulfilledReducer = (state, action) => {
    state.recipesSet = action.payload;
};

const categoriesAnyPendingReducer = (state) => {
    state.isLoading = true;
};

const categoriesAnyFullfilledReducer = (state) => {
    state.isLoading = false;
    state.error = null;
};

const categoriesAnyRejectedReducer = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(
                fetchCategoryList.fulfilled,
                fetchCategoryListFulfilledReducer
            )
            .addCase(
                fetchRecipesByCategory.fulfilled,
                fetchRecipesByCategoryFulfilledReducer
            )
            .addCase(
                fetchRecipesBySet.fulfilled,
                fetchRecipesBySetFulfilledReducer
            )
            .addMatcher(getActions("pending"), categoriesAnyPendingReducer)
            .addMatcher(getActions("rejected"), categoriesAnyRejectedReducer)
            .addMatcher(
                getActions("fulfilled"),
                categoriesAnyFullfilledReducer
            ),
});

export const categoriesReducer = categoriesSlice.reducer;
