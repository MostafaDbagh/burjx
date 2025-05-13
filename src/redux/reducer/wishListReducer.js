import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const WishlistSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    toggleWishlistItem: (state, action) => {
      const existingIndex = state.findIndex(
        item => item.productId === action.payload.productId
      );
      if (existingIndex !== -1) {
        return state.filter(item => item.productId !== action.payload.productId);
      } else {
        return [...state, action.payload];
      }
    },

    removeFromWishlist: (state, action) => {
      return state.filter(item => item.productId !== action.payload.productId);
    },
  },
});

export const { toggleWishlistItem, removeFromWishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;
