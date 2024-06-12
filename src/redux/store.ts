import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { paramsReducer, cartReducer, pizzaReducer } from "@redux/index";

export const store = configureStore({
  reducer: {
    paramsReducer,
    cartReducer,
    pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
