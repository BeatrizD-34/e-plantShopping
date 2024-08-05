import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { addItem, removeItem, updateQuantity } from './CartSlice';

 const store = configureStore({
    reducer: {
        cart: cartReducer,
        cart: updateQuantity,
        cart: addItem,
        cart: removeItem,
    },
});
export default store