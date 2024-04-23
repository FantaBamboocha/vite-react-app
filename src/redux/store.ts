import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import params from "./slices/search-params/slice";
import cart from "./slices/cart/slice";
import pizza from "./slices/req-thunk/slice";

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
