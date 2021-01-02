/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import Axios from 'axios';

const pizzaAdapter = createEntityAdapter({
  selectId: (pizza) => pizza.id,
});

const API = 'https://dozzy-pizza-default-rtdb.europe-west1.firebasedatabase.app/pizzas.json';

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizza',
  async () => Axios.get(API)
    .then(({ data }) => data),
);

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: pizzaAdapter.getInitialState({
    status: 'idle',
    error: null,
    filters: {
      sort: 'rating',
      category: null,
    },
  }),
  reducers: {
    setSort(state, action) {
      state.filters.sort = action.payload;
    },
    setCategory(state, action) {
      state.filters.category = action.payload;
    },
  },
  extraReducers: {
    [fetchPizza.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPizza.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      pizzaAdapter.setAll(state, action.payload);
    },
    [fetchPizza.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { setSort, setCategory } = pizzaSlice.actions;

export default pizzaSlice.reducer;
