import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice += action.payload.price;
      state.totalCount++;
    },

    minusPizza(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count > 0) {
        findItem.count--;
        state.totalCount--;
        state.totalPrice -= findItem.price;
      }

      if (findItem.count === 0) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
    },
    removePizza(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      );
      state.totalCount = state.items.reduce((sum, obj) => obj.count + sum, 0);
    },
    clearCart(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addPizza, minusPizza, removePizza, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
