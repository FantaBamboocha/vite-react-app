// Selectors
export * from "./slices/cart/selectors";
export * from "./slices/req-thunk/selectors";
export * from "./slices/search-params/selectors";

// Slices
export { default as cartReducer } from "./slices/cart/slice";
export { default as pizzaReducer } from "./slices/req-thunk/slice";
export { default as paramsReducer } from "./slices/search-params/slice";
export * from "./slices/req-thunk/slice";

// Types
export type { ICartSliceState, IPizzaCart } from "./slices/cart/types";
export type {
  ISearchParams,
  CategoryEnum,
  SortPropertyEnum,
} from "./slices/search-params/types";
export type { IReqPizza } from "./slices/req-thunk/types";
export type { RootState } from "./store";

// Store
export * from "@redux/store";

// Initial state

export { initialSearchParamsState } from "./slices/search-params/slice";
export { initialCartState } from "./slices/cart/slice";
export { initialReqPizzaState } from "./slices/req-thunk/slice";

// Actions
export * from "./slices/search-params/slice";
export {
  addPizza,
  minusPizza,
  removePizza,
  clearCart,
} from "./slices/cart/slice";
export * from "./slices/req-thunk/slice";
