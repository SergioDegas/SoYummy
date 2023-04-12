import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategoryList = createAsyncThunk(
    "categories/fetchCategoryList",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get(`/recipes/category-list`);
            return data.categories;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchRecipesByCategory = createAsyncThunk(
    "categories/fetchRecipesByCategory",
    async ({ category, page = 1 }, thunkAPI) => {
        try {
            const { data } = await axios.get(
                `/recipes/category/${category}?page=${page}`
            );

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchRecipesBySet = createAsyncThunk(
    "categories/fetchRecipesBySet",
    async (page = 1, thunkAPI) => {
        try {
            const { data } = await axios.get(`/recipes/main-page?page=${page}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
