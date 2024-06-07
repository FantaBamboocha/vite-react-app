import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";

import Menu from "./Menu";

describe("Menu", () => {
  it("should render menu", () => {
    render(
      <Menu
        menuActive={true}
        setMenuActive={() => {}}
        header={"header"}
        categories={[]}
      />
    );
    expect(screen.getByText("header")).toBeInTheDocument();
  });
});
