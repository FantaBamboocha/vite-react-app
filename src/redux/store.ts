import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import params from "@redux/slices/search-params/slice";
import cart from "@redux/slices/cart/slice";
import pizza from "@redux/slices/req-thunk/slice";

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
