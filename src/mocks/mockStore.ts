import configureMockStore from "redux-mock-store";

import {
  initialSearchParamsState,
  initialCartState,
  initialReqPizzaState,
} from "@redux/index";

const mockStore = configureMockStore();

export const createMockStore = (state = {}) =>
  mockStore({
    paramsReducer: initialSearchParamsState,
    cartReducer: initialCartState,
    pizzaReducer: initialReqPizzaState,
    ...state,
  });
