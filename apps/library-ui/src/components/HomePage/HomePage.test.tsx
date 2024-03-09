import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

describe("HomePage component", () => {
  it("renders the heading and link correctly", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    // Assert that the heading is rendered correctly
    const headingElement = screen.getByText(/welcome to library system/i);
    expect(headingElement).toBeInTheDocument();

    // Assert that the link is rendered correctly
    const linkElement = screen.getByRole("link", { name: /add\/view book/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/add-view-book");
  });
});
