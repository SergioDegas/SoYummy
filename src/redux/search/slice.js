import { createSlice } from "@reduxjs/toolkit";
import { searchRecipes } from "./operation";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    recipes: [],
    isLoading: false,
    error: null,
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchRecipes.pending, (state) => {
        state.isLoading = true;
        state.recipes = [];
        state.error = null;
      })
      .addCase(searchRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload.data.data.recipes;
        state.error = null;
      })
      .addCase(searchRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.recipes = [];
        state.error = action.error.message;
      });
  },
});
export const searchReducer = searchSlice.reducer;