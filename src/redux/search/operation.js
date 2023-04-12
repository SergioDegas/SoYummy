import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// axios.defaults.baseURL = 'http://localhost:4000/';

export const searchRecipes = createAsyncThunk(
  "/search",
  async ({searchTerm, page, limit, searchBy}, thunkAPI) => {
    try {
       const response = await axios.get(`/search`, {
        params: {
          searchTerm, 
          page, 
          limit, 
          searchBy
        }
      });
      return response.data.recipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);