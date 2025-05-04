import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const WishlistSlice = createSlice({
  name: "wishList",
  initialState: initialState,
  reducers: {
    addToWishlist: (state, action) => {
      return state.some(item => item.productId === action.payload.productId)
      ? state
      : [...state, action.payload];
    },  
  },
});

export const { addToWishlist} = WishlistSlice.actions;
export default WishlistSlice.reducer;
