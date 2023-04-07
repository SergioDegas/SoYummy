import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchShoppingList, updateShoppingList } from './operation';

const extraActions = [ fetchShoppingList ];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFullfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const fetchShoppingListFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

// const addContactFulfilledReducer = (state, action) => {
//   state.items.push(action.payload);
// };

// const deleteContactFulfilledReducer = (state, action) => {
//   const index = state.items.findIndex(
//     task => task.id === action.payload.id
//   );
//   state.items.splice(index, 1);
// };

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchShoppingList.fulfilled, fetchShoppingListFulfilledReducer)
    //   .addCase(getShoppingList.fulfilled, addContactFulfilledReducer)
    //   .addCase(getShoppingList.fulfilled, deleteContactFulfilledReducer)
      .addMatcher(getActions('pending'), handlePending)
      .addMatcher(getActions('rejected'), handleRejected)
      .addMatcher(getActions('fulfilled'), handleFullfilled);
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;