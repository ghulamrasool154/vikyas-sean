import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  carts: [],
  count: 0,
  open: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      let payload = action.payload;

      const exist = state.carts.find(
        (cart) => cart.productId === payload.productId
      );

      if (exist) {
        exist.qty += 1;
      } else {
        state.carts.push({ ...payload, qty: 1 });
      }

      state.count = state.carts.reduce((total, cart) => total + cart.qty, 0);
    },
    handleOpenCart: (state, action) => {
      state.open = !state.open;
    },
  },
});

export const { addToCart, handleOpenCart } = cartSlice.actions;

export default cartSlice.reducer;
