import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const fetchRecipes = createAsyncThunk(
  "user/own-recipes",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/user/own-recipes");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addRecipe = createAsyncThunk(
  "add/own-recipes",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("user/own-recipes", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeRecipe = createAsyncThunk(
  "remove/own-recipes",
  async (reecipeId, thunkApi) => {
    try {
      const { data } = await axios.delete("user/own-recipes");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addNewRecipe = createAsyncThunk(
  "recipe/add-new",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/recipes", credentials);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong... Please, try again");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
