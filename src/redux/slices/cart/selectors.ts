import { RootState } from "@redux/store";
import { createSelector } from "reselect";
import { IPizzaCart } from "./types";

export const cartSelector = (state: RootState) => state.cartReducer;

export const cartItemsSelector = (state: RootState) => state.cartReducer.items;

export const cartItemByIdSelector = (id: number) =>
  createSelector([cartItemsSelector], (items: IPizzaCart[]) =>
    items.find((item) => item.id === id)
  );
