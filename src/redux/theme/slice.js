import { createSlice } from "@reduxjs/toolkit";

const themeInitialState = { light: true };

const themeSlice = createSlice({
    name: "theme",
    initialState: themeInitialState,
    reducers: {
        toggleTheme(state, action) {
            state.light = !state.light;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
