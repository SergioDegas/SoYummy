import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const fetchIngredientsList = createAsyncThunk(
  "ingredients/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/ingredients");
      return data.ingredients;
    } catch (error) {
      toast.error("Something went wrong... Please, reload the page");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
