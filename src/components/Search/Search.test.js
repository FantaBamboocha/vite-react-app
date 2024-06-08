import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";

import { createMockStore } from "../../mocks/mockStore";
import Search from "./index";

const dispatch = jest.fn();
const store = createMockStore({ dispatch });

jest.useFakeTimers();

describe("Search Component", () => {
  it("should render the search input", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    expect(screen.getByPlaceholderText("Поиск...")).toBeInTheDocument();
  });

  it("should update localSearchValue on input change", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const input = screen.getByPlaceholderText("Поиск...");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("should clear the search input", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const input = screen.getByPlaceholderText("Поиск...");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");

    const clearButton = screen.getByLabelText("clear-icon");
    fireEvent.click(clearButton);
    expect(input.value).toBe("");
  });

  it("should debounce input change and dispatch only once", async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const input = screen.getByPlaceholderText("Поиск...");

    // Сначала сгенерируем изменение ввода
    fireEvent.change(input, { target: { value: "t" } });
    fireEvent.change(input, { target: { value: "te" } });
    fireEvent.change(input, { target: { value: "tes" } });

    // Перемотаем время на 1000мс вперед, чтобы завершить дебаунс
    jest.advanceTimersByTime(1000);

    // Перед проверкой, дождемся завершения всех асинхронных операций
    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
