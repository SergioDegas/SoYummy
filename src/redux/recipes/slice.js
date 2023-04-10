import { createSlice } from "@reduxjs/toolkit";

import {
  fetchRecipes,
  addRecipe,
  removeRecipe,

} from "./operation";

const initialState = {

	recipes: [],
	isLoading: false,
	error: null,
	currentPage: 1,
	perPage: 5,

};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payoad;
};

const ownRecipeSlice = createSlice({

	name: 'recipes',
	initialState,
	reducers: {
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchRecipes.pending, handlePending)
			.addCase(fetchRecipes.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.recipes = action.payload;
			})
			.addCase(fetchRecipes.rejected, handleRejected)

			.addCase(addRecipe.pending, handlePending)
			.addCase(addRecipe.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.recipes.push(action.payload);
			})
			.addCase(addRecipe.rejected, handleRejected)

			.addCase(removeRecipe.pending, handlePending)
			.addCase(removeRecipe.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				const index = state.recipes.findIndex((recipe) => recipe.id === action.payload.id);
				state.recipes.splice(index, 1);
			})
			.addCase(removeRecipe.rejected, handleRejected);
		},

})

export const {setCurrentPage} = ownRecipeSlice.actions;
export const ownRecipeReduser = ownRecipeSlice.reducer;

