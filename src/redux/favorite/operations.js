import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFavoriteRecipesList = createAsyncThunk(
    "recipes/fetchFavoriteRecipesList",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get(`/user/favorites`);
            return data.recipes;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addToFavoriteList = createAsyncThunk(
    "recipes/addToFavoriteList",
    async ({ userId, recipeId }, thunkAPI) => {
        try {
            const { data } = await axios.patch(`/user/favorites`, {
                userId,
                recipeId,
            });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
