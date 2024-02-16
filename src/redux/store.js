import { configureStore } from "@reduxjs/toolkit";

import filter from "./slices/filter";
import cart from "./slices/cartSlice";
import pizza from "./slices/reqPizzaSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});
