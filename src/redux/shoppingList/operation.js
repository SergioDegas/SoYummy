import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const token = localStorage.getItem("token");

export const fetchShoppingList = createAsyncThunk(
  "shoppingList/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/user/shopping-list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.shoppingList;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateShoppingList = createAsyncThunk(
  "shoppingList/updateShoppingList",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch("/user/shopping-list", credentials, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
