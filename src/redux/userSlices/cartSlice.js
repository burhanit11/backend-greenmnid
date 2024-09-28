// features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Each item will have { id, name, price, quantity }
    totalPrice: 0, // Add totalPrice to manage the total cost of the cart
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem._id === item._id
      );

      if (existingItem) {
        // If the item already exists in the cart, increase its count
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price; // Update the total price
      } else {
        // Otherwise, add the item to the cart with a quantity of 1
        state.items.push({ ...item, quantity: 1 });
        state.totalPrice += item.price; // Update the total price
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((cartItem) => cartItem._id === id);

      if (item) {
        state.totalPrice -= item.price * item.quantity; // Update the total price
        state.items = state.items.filter((cartItem) => cartItem._id !== id);
      }
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((cartItem) => cartItem._id === id);

      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price; // Update the total price
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((cartItem) => cartItem._id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice -= item.price; // Update the total price
      } else if (item) {
        state.totalPrice -= item.price; // Update the total price
        state.items = state.items.filter((cartItem) => cartItem._id !== id);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
