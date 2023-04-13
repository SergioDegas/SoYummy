import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
    register,
    logIn,
    logOut,
    refreshUser,
    addToFavoriteList,
} from "./operation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null
};

const extraActions = [register, logIn];

const getActions = (type) =>
    isAnyOf(...extraActions.map((action) => action[type]));

const registerFulfilledReducer = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
};

const logOutFulfilledReducer = (state) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
};

const refreshUserFulfilledReducer = (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
};

const refreshUserToggleReducer = (state) => {
    state.isRefreshing = !state.isRefreshing;
};

const addFavoriteFulfilledReducer = (state, action) => {
    if (action.payload.message.includes("added")) {
        state.user.favoriteRecipes.unshift(action.payload.recipeId);
    }
    if (action.payload.message.includes("removed")) {
        const index = state.user.favoriteRecipes.findIndex(
            (recipe) => recipe._id === action.payload.recipeId
        );
        state.user.favoriteRecipes.splice(index, 1);
    }
};

const authAnyPendingReducer = (state) => {
    state.isLoading = true;
};

const authAnyFullfilledReducer = (state) => {
    state.isLoading = false;
    state.error = null;
};

const authAnyRejectedReducer = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(register.fulfilled, registerFulfilledReducer)
        .addCase(logIn.fulfilled, registerFulfilledReducer)
        .addCase(logOut.fulfilled, logOutFulfilledReducer)
        .addCase(addToFavoriteList.fulfilled, addFavoriteFulfilledReducer)
        .addCase(refreshUser.pending, refreshUserToggleReducer)
        .addCase(refreshUser.fulfilled, refreshUserFulfilledReducer)
        .addCase(refreshUser.rejected, refreshUserToggleReducer)
        .addMatcher(getActions("pending"), authAnyPendingReducer)
        .addMatcher(getActions("rejected"), authAnyRejectedReducer)
        .addMatcher(getActions("fulfilled"),authAnyFullfilledReducer
        );
    },
});


export const authReducer = authSlice.reducer;
