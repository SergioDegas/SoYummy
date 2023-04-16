import { createSlice } from "@reduxjs/toolkit";
import { searchRecipes } from "./operation";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    recipes: [],
    isLoading: false,
    error: null,
    totalPage: null,
    perPage: 10, // define perPage in initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchRecipes.pending, (state) => {
        state.isLoading = true;
        state.recipes = [];
        state.error = null;
        state.totalPage = null;
      })
      .addCase(searchRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload.recipes;
        state.totalPage = action.payload.totalPage
        console.log("action.reducer", action.payload.totalPage)
        state.perPage = action.payload.limit; // update perPage here
        state.error = null;
        console.log("action.payload", action.payload);
      })
      .addCase(searchRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.recipes = [];
        state.error = action.error.message;
      });
  },
});

export const searchReducer = searchSlice.reducer;