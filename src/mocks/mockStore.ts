import configureMockStore from "redux-mock-store";
import { jest } from "@jest/globals";

import {
  initialSearchParamsState,
  initialCartState,
  initialReqPizzaState,
} from "@redux/index";

const mockStore = configureMockStore();

export const createMockStore = (state = {}) =>
  mockStore({
    params: initialSearchParamsState,
    cart: initialCartState,
    pizza: initialReqPizzaState,
    ...state,
  });
