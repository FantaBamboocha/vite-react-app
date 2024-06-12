import { paramsSelector, initialSearchParamsState } from "@redux/index";

import { createMockStore } from "../../../mocks/mockStore";

describe("search params selector", () => {
  it("should return initial state", () => {
    const mockStore = createMockStore();
    const mockState = mockStore.getState();
    const result = paramsSelector(mockState);

    expect(result).toEqual(initialSearchParamsState);
  });
});
