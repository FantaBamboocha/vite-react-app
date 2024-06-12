import {
  addPizza,
  minusPizza,
  removePizza,
  clearCart,
  cartReducer,
} from "@redux/index";

import { createMockStore } from "../../../mocks/mockStore";

const mockStore = createMockStore();
const mockState = mockStore.getState();
const cartState = mockState.cartReducer;

describe("cart reducer", () => {
  it("should return initial state when passed an empty action", () => {
    expect(cartReducer(undefined, { type: undefined })).toEqual(cartState);
  });

  it("should add pizza to the empty cart with addPizza action", () => {
    const pizzaToAdd = {
      id: 1,
      imageUrl: "url",
      title: "title",
      price: 100,
      size: 30,
      type: "type",
      count: 1,
    };
    const action = {
      type: addPizza.type,
      payload: pizzaToAdd,
    };
    const newState = cartReducer(cartState, action);

    expect(newState.items.length).toBe(1);
    expect(newState.items[0]).toEqual(pizzaToAdd);
    expect(newState.totalPrice).toBe(100);
    expect(newState.totalCount).toBe(1);
  });

  it("should increment the count of an existing pizza item in the cart", () => {
    const stateWithPizza = createMockStore({
      cartReducer: {
        items: [{ id: 1, price: 10, count: 1 }],
        totalPrice: 10,
        totalCount: 1,
      },
    });

    const action = {
      type: addPizza.type,
      payload: {
        id: 1,
        price: 10,
        count: 1,
      },
    };

    const newState = cartReducer(stateWithPizza.getState().cartReducer, action);

    expect(newState.items.length).toBe(1);
    expect(newState.items[0].id).toBe(1);
    expect(newState.totalPrice).toBe(20);
    expect(newState.items[0].count).toBe(2);
    expect(newState.totalCount).toBe(2);
  });
});
