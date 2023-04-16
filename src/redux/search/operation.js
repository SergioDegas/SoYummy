import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/";

export const searchRecipes = createAsyncThunk(
  "/search",
  async ({ searchTerm, page = 1, limit, searchBy }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/search?searchTerm=${searchTerm}&page=${page}&limit=${limit}&searchBy=${searchBy}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
