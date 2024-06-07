import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Menu from "./Menu";

const defaultProps = {
  menuActive: true,
  setMenuActive: jest.fn(),
  header: "header",
  categories: [{ userTitle: "Category 1" }, { userTitle: "Category 2" }],
};
jest.mock("./styles.module.scss", () => {
  return {
    active: "active",
    menu: "menu",
    blur: "blur",
    menuContent: "menuContent",
    menuHeader: "menuHeader",
  };
});

describe("Menu Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the menu header", () => {
    render(<Menu {...defaultProps} />);
    expect(screen.getByText("header")).toBeInTheDocument();
  });

  it("should render all categories", () => {
    render(<Menu {...defaultProps} />);
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();
  });

  it("should call setMenuActive when blur div is clicked", () => {
    const { container } = render(<Menu {...defaultProps} />);
    const blurDiv = container.querySelector(".blur");

    fireEvent.click(blurDiv);
    expect(defaultProps.setMenuActive).toHaveBeenCalled();
  });

  // it("should have the correct class name based on menuActive prop", () => {
  //   const { container } = render(<Menu {...defaultProps} />);
  //   const menuElement = container.querySelector(".menu");

  //   expect(menuElement.classList.contains("active")).toBe(true);

  //   render(<Menu {...defaultProps} menuActive={false} />);
  //   expect(menuElement.classList.contains("active")).toBe(false);
  // });

  it("Menu Snapshot", () => {
    const menu = render(<Menu {...defaultProps} />);

    expect(menu).toMatchSnapshot();
  });
});
