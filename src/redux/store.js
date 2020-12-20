import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './pizzaSlice';
import cartReducer from './cartSlice';

export default configureStore({
  reducer: {
    pizza: pizzaReducer,
    cart: cartReducer,
  },
});
