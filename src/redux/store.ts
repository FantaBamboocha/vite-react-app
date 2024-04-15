import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

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

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
