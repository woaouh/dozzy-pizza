/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const getOneItemPrice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);
const getTotalPrice = (obj) => Object.keys(obj).reduce((acc, k) => acc + obj[k].totalPrice, 0);
const getTotalCount = (obj) => Object.keys(obj).reduce((acc, k) => acc + obj[k].items.length, 0);

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizzaToCart(state, action) {
      const currentPizza = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizza,
          totalPrice: getOneItemPrice(currentPizza),
        },
      };

      const totalPrice = getTotalPrice(newItems);
      const totalCount = getTotalCount(newItems);

      state.items = newItems;
      state.totalPrice = totalPrice.toFixed(2);
      state.totalCount = totalCount;
    },
  },
});

export const { addPizzaToCart } = cartSlice.actions;

export default cartSlice.reducer;
