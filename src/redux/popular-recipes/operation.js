import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const fetchPopularRecipes = createAsyncThunk(
  "recipes/getPopular",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/recipes/popular-recipes");
      return data.popularRecipes;
    } catch (error) {
      // toast.error("Something went wrong... Please, reload the page");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
