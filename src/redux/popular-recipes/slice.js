import { createSlice } from "@reduxjs/toolkit";

import { fetchPopularRecipes } from "./operation";

const initialState = {
  recipes: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payoad;
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  extraReducers: {
    [fetchPopularRecipes.pending]: handlePending,
    [fetchPopularRecipes.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.recipes = action.payload;
    },
    [fetchPopularRecipes.rejected]: handleRejected,
  },
});

export const recipesReducer = recipesSlice.reducer;
