import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://backend-x5bd.onrender.com';

export const searchRecipes = createAsyncThunk(
  "/search",
  async ({searchTerm, page, limit, searchBy}, thunkAPI) => {
    try {
      const {recipes} = await axios.get(`/search`, {
        params: {
          searchTerm, 
          page, 
          limit, 
          searchBy
        }
      });
      return {recipes};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);