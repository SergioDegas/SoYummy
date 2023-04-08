import { createSlice } from "@reduxjs/toolkit";

import { fetchRecipes, addRecipe, removeRecipe } from "./operation";

const initialState = {
	recipes: [],
	isLoading: false,
	error: null,
};

const handlePending = state => {
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payoad;
};

const ownRecipeSlice = createSlice({
	name: 'recipes',
	initialState,
	extraReducers: {
		[fetchRecipes.pending]: handlePending,
		[fetchRecipes.fulfilled] (state, action) {
			state.isLoading = false;
			state.error = null;
			state.recipes = action.payload;
		},
		[fetchRecipes.rejected]: handleRejected,

		[addRecipe.pending]: handlePending,
		[addRecipe.fulfilled](state, action ) {
			console.log(action.payload)
			state.isLoading = false;
			state.error = null;
			state.recipes.push(action.payload);
		},
		[addRecipe.rejected]: handleRejected,

		[removeRecipe.pending]: handlePending,
		[removeRecipe.fulfilled] (state, action) {
			state.isLoading = false;
			state.error = null;
			const index = state.recipes.findIndex (recipe => recipe.id === action.payload.id);
			state.recipes.splice(index, 1);
},
	},

})

export const ownRecipeReduser = ownRecipeSlice.reduser;