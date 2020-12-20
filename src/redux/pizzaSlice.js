/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  category: null,
  sort: 'rating',
  filters: {
    sort: 'rating',
    category: null,
  },
};

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizza',
  async (filters) => Axios.get(`/pizzas?${filters.category !== null ? `category=${filters.category}` : ''}&_sort=${filters.sort}&_order=asc`)
    .then(({ data }) => data),
);

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
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
      state.items = action.payload;
    },
    [fetchPizza.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { setSort, setCategory } = pizzaSlice.actions;

export default pizzaSlice.reducer;
