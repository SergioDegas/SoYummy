import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, updateUserData } from "./operation";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    avatarURL: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    updateUserSuccess(state, action) {
      state.name = action.payload.name;
      state.avatarURL = action.payload.avatarURL;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.name = action.payload.name;
        state.avatarURL = action.payload.avatarURL;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        // Оновити дані про користувача в сторі
        // з використанням нового редюсера updateUser
        state = updateUser(state, action);
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Додати новий редюсер updateUser, щоб оновити дані про користувача
const updateUser = (state, action) => {
  const { name, avatarURL } = action.payload;
  return {
    ...state,
    name,
    avatarURL,
  };
};

// Експортувати редюсер та екшн
export const { updateUserSuccess } = userSlice.actions;
export const currentUserSlice = userSlice.reducer;