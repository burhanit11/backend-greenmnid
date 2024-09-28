// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  isLoggedIn: false,
  user: null, // Can store user information such as id, name, email, etc.
};

// User slice
const authUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload; // Add user information
    },
    removeUser: (state) => {
      state.isLoggedIn = false;
      state.user = null; // Clear user information
    },
  },
});

// Export actions
export const { addUser, removeUser } = authUser.actions;

// Export reducer
export default authUser.reducer;
