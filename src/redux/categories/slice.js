import { createSlice } from "@reduxjs/toolkit";

import { fetchCategoryList } from "./operation";

const initialState = {
  categories: [],
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

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [fetchCategoryList.pending]: handlePending,
    [fetchCategoryList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.categories = action.payload;
    },
    [fetchCategoryList.rejected]: handleRejected,
  },
});

export const categoriesReducer = categoriesSlice.reducer;
