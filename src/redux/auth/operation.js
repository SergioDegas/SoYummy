import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = "https://backend-x5bd.onrender.com";

// Utility to add JWT
const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post("/auth/register", credentials);
            setAuthHeader(responce.data.token);
            return responce.data;
        } catch (e) {
            toast.error("Email in use");
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const logIn = createAsyncThunk(
    "auth/logIn",
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post("/auth/login", credentials);
            setAuthHeader(responce.data.token);
            return responce.data;
        } catch (e) {
          toast.error("Email or password is wrong");
          return thunkAPI.rejectWithValue(e.message);
      }
    }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
    try {
        await axios.post("/user/logout");
        clearAuthHeader();
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue("Unable to fetch user");
        }

        try {
            setAuthHeader(persistedToken);
            const responce = await axios.get("/user/current");
            return responce.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addToFavoriteList = createAsyncThunk(
    "auth/addToFavoriteList",
    async ({ recipeId }, thunkAPI) => {
        try {
            const { data } = await axios.patch(`/user/favorites`, {
                recipeId,
            });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
