import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchShoppingList, updateShoppingList } from "./operation";

const extraActions = [fetchShoppingList];
const getActions = (type) =>
  isAnyOf(...extraActions.map((action) => action[type]));

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFullfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const fetchShoppingListFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const updateShoppingListFulfilledReducer = (state, action) => {
  //пофіксити додавання, як додавати якщо в action.payload не приходить об'єкт

  //   if (action.payload.message === "Successfully added to shopping list") {
  //     state.items.push();
  //   }
  if (action.payload.message === "Successfully removed from shopping list") {
    const index = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    state.items.splice(index, 1);
  }
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoppingList.fulfilled, fetchShoppingListFulfilledReducer)
      .addCase(updateShoppingList.fulfilled, updateShoppingListFulfilledReducer)
      .addMatcher(getActions("pending"), handlePending)
      .addMatcher(getActions("rejected"), handleRejected)
      .addMatcher(getActions("fulfilled"), handleFullfilled);
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
