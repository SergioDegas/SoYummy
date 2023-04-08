import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://backend-x5bd.onrender.com';

export const searchRecipes = createAsyncThunk(
  "search",
  async (searchData) => {
    const { searchTerm, page, limit, searchBy } = searchData;
    const response = await axios.get(`/api/search`, {
      params: { searchTerm, page, limit, searchBy },
    });
    return response.data.data.recipes;
  }
);
