import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async (updatedUserData) => {
    try {
      const response = await axios.put("/user/update", updatedUserData);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to update user data.");
    }
  }
);

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    try {
      const {
        data: { name, avatarURL },
      } = await axios.get("/user/current");

      return { name, avatarURL };
    } catch (error) {
      console.error(error);
      throw new Error("Failed to retrieve user data.");
    }
  }
);
