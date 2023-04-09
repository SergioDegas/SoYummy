import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addToFavoriteList, fetchFavoriteRecipesList } from "./operations";

const initialState = {
    recipes: [],
    isLoading: false,
    error: null,
};

const extraActions = [fetchFavoriteRecipesList];
const getActions = (type) =>
    isAnyOf(...extraActions.map((action) => action[type]));

const fetchFavoritRecipesFulfilledReducer = (state, action) => {
    state.recipes = action.payload;
};

const addToFavoriteListFulfilledReducer = (state, action) => {
    if (action.payload.message.includes("added")) {
        state.recipes.unshift(action.payload.data);
    }

    if (action.payload.message.includes("removed")) {
        const index = state.recipes.findIndex(
            (recipe) => recipe._id === action.payload._id
        );
        state.recipes.splice(index, 1);
    }
};

const favoritesAnyPendingReducer = (state) => {
    state.isLoading = true;
};

const favoritesAnyFullfilledReducer = (state) => {
    state.isLoading = false;
    state.error = null;
};

const favoritesAnyRejectedReducer = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(
                fetchFavoriteRecipesList.fulfilled,
                fetchFavoritRecipesFulfilledReducer
            )
            .addCase(
                addToFavoriteList.fulfilled,
                addToFavoriteListFulfilledReducer
            )
            .addMatcher(getActions("pending"), favoritesAnyPendingReducer)
            .addMatcher(getActions("rejected"), favoritesAnyRejectedReducer)
            .addMatcher(getActions("fulfilled"), favoritesAnyFullfilledReducer),
});

export const favoritesReducer = favoriteSlice.reducer;
