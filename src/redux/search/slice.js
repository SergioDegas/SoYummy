import { createSlice } from "@reduxjs/toolkit";
import { searchRecipes } from "./operation";


export const searchSlice = createSlice({
    name: "search",
    initialState: {
      recipes: [],
      status: "idle",
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(searchRecipes.pending, (state) => {
          state.status = "loading";
          state.recipes = [];
          state.error = null;
        })
        .addCase(searchRecipes.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.recipes = action.payload;
          state.error = null;
        })
        .addCase(searchRecipes.rejected, (state, action) => {
          state.status = "failed";
          state.recipes = [];
          state.error = action.error.message;
        });
    },
  });
  