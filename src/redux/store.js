import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { shoppingListReducer } from "./shoppingList/slice";
import { ownRecipeReduser } from "./recipes/slice";
import { categoriesReducer } from "./categories/slice";
import { favoritesReducer } from "./favorite/slice";
import { searchReducer } from "./search/slice";
import { ingredientsReducer } from "./ingredients/slice";
import { recipesReducer } from "./popular-recipes/slice";
import { themeReducer } from "./theme/slice";
import { currentUserSlice } from "./user/slice";

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
};

const themePersistConfig = {
    key: "theme",
    storage,
    whitelist: ["light"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    shoppingList: shoppingListReducer,
    ownRecipe: ownRecipeReduser,
    categories: categoriesReducer,
    favorite: favoritesReducer,
    ingredients: ingredientsReducer,
    recipes: recipesReducer,
    theme: persistReducer(themePersistConfig, themeReducer),
    search: searchReducer,
    user: currentUserSlice,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
