import { cartSelector, initialCartState } from "@redux/index";
import { createMockStore } from "../../../mocks/mockStore";

describe("redux selectors", () => {
  it("should return cart state from state object", () => {
    const mockStore = createMockStore();
    const mockState = mockStore.getState();
    console.log(mockStore);
    console.log(mockState);
    const result = cartSelector(mockState);
    expect(result).toEqual(initialCartState);
  });
});
