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
 import {searchSlice} from "./search/slice";                                                                                                                                       

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
export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        shoppingList: shoppingListReducer,
        categories: categoriesReducer,
        ownRecipe: ownRecipeReduser,

        search: searchSlice,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',

});

export const persistor = persistStore(store);
