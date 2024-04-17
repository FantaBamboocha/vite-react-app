import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getCartFromSS } from "../../utils/getCartFromSS";

export interface IPizzaCart {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
}

interface ICartSliceState {
  items: IPizzaCart[];
  totalPrice: number;
  totalCount: number;
}

const { items, totalPrice, totalCount } = getCartFromSS();

const initialState: ICartSliceState = {
  items,
  totalPrice,
  totalCount,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action: PayloadAction<IPizzaCart>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice += action.payload.price;
      state.totalCount++;
    },

    minusPizza(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem && findItem.count > 0) {
        findItem.count--;
        state.totalCount--;
        state.totalPrice -= findItem.price;
      }

      if (findItem && findItem.count === 0) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
    },
    removePizza(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        state.totalCount -= findItem.count;
        state.totalPrice -= findItem.price * findItem.count;
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartSelector = (state: RootState) => state.cart;

export const { addPizza, minusPizza, removePizza, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
