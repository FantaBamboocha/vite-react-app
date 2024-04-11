import { configureStore } from "@reduxjs/toolkit";

import params from "./slices/searchParams";
import cart from "./slices/cartSlice";
import pizza from "./slices/reqPizzaSlice";

export const store = configureStore({
  reducer: {
    params,
    cart,
    pizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;
