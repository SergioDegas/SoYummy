import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFavoriteRecipesList = createAsyncThunk(
    "recipes/fetchFavoriteRecipesList",
    async ({ page = 1, limit }, thunkAPI) => {
        try {
            const { data } = await axios.get(
                `/user/favorites?page=${page}&limit=${limit}`
            );
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
