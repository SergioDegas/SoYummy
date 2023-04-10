import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchFavoriteRecipesList } from "./operations";

const initialState = {
    recipes: [],
    totalItems: null,
    isLoading: false,
    error: null,
};

const extraActions = [fetchFavoriteRecipesList];
const getActions = (type) =>
    isAnyOf(...extraActions.map((action) => action[type]));

const fetchFavoritRecipesFulfilledReducer = (state, action) => {
    state.recipes = action.payload.recipes;
    state.totalItems = action.payload.totalItems;
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
            .addMatcher(getActions("pending"), favoritesAnyPendingReducer)
            .addMatcher(getActions("rejected"), favoritesAnyRejectedReducer)
            .addMatcher(getActions("fulfilled"), favoritesAnyFullfilledReducer),
});

export const favoritesReducer = favoriteSlice.reducer;
