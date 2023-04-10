import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchRecipes = createAsyncThunk(

	'user/own-recipes',
	async (_, thunkAPI) => {
		try {
			const {result} = await axios.get('user/own-recipes');
			return result.data;
		
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		};
	}
);

export const addRecipe = createAsyncThunk(
	'add/own-recipes',
	async (credentials, thunkAPI) => {
		try {
			const {data} = await axios.post('/own-recipes',credentials);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		};
	}
);

export const removeRecipe = createAsyncThunk(
	'remove/own-recipes',
	async (recipeId, thunkApi) => {
		try {
			const {data} = await axios.delete(`/own-recipes${recipeId}`);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message)
		};
	}

);
