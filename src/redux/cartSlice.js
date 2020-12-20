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

      state.items = newItems;
      state.totalPrice = getTotalPrice(newItems);
      state.totalCount = getTotalCount(newItems);
    },
    clearCart(state) {
      state.items = {};
    },
    removeCartItem(state, action) {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      state.items = newItems;
      state.totalPrice -= currentTotalPrice;
      state.totalCount -= currentTotalCount;
    },
    plusCartItem(state, action) {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getOneItemPrice(newObjItems),
        },
      };

      state.items = newItems;
      state.totalPrice = getTotalPrice(newItems);
      state.totalCount = getTotalCount(newItems);
    },
    minusCartItem(state, action) {
      const oldItems = state.items[action.payload].items;
      const newObjItems = oldItems.length > 1
        ? state.items[action.payload].items.slice(1)
        : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getOneItemPrice(newObjItems),
        },
      };

      state.items = newItems;
      state.totalPrice = getTotalPrice(newItems);
      state.totalCount = getTotalCount(newItems);
    },
  },
});

export const {
  addPizzaToCart,
  clearCart,
  removeCartItem,
  plusCartItem,
  minusCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
