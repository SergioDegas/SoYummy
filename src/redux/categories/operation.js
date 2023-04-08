import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const fetchCategoryList = createAsyncThunk(
  "categories/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/recipes/category-list");
      return data.categories;
    } catch (error) {
      toast.error("Something went wrong... Please, reload the page");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
