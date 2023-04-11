import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
      console.log("redipes", response)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);