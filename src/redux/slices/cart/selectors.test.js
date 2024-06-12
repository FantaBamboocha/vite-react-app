import { cartSelector, initialCartState } from "@redux/index";

import { createMockStore } from "../../../mocks/mockStore";
const mockStore = createMockStore();
const mockState = mockStore.getState();

describe("cart selector", () => {
  it("should return cart state from state object", () => {
    const result = cartSelector(mockState);

    expect(result).toEqual(initialCartState);
  });
});
