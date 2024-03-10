import { fireEvent, render, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect"; // For extended expect methods
import { addBookAPI } from "src/functions/BookAPI.function";
import AddViewBook from "./AddViewBook";
// import { addBookAPI } from "src/functions/BookAPI.function";

// Mock the addBookAPI, deleteBookAPI, and getBooksAPI functions
// jest.mock("src/functions/Book.function", () => ({
//   addBookAPI: jest.fn(),
//   deleteBookAPI: jest.fn(),
//   getBooksAPI: jest.fn(),
//   updateBookAPI: jest.fn(),
// }));

describe.skip("AddViewBook component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(<AddViewBook />);
    expect(getByText("Add/View books")).toBeInTheDocument();
    expect(getByPlaceholderText("Book Name")).toBeInTheDocument();
    expect(getByPlaceholderText("Author")).toBeInTheDocument();
    expect(getByText("Add Book")).toBeInTheDocument();
    expect(getByText("Books")).toBeInTheDocument();
  });

  it.only("adds a new book", async () => {
    const { getByPlaceholderText, getByText } = render(<AddViewBook />);
    const bookNameInput = getByPlaceholderText("Book Name");
    const authorInput = getByPlaceholderText("Author");
    const addButton = getByText("Add Book");

    // Fill out the form
    fireEvent.change(bookNameInput, { target: { value: "Test Book" } });
    fireEvent.change(authorInput, { target: { value: "Test Author" } });

    // Click the Add Book button
    fireEvent.click(addButton);

    // Expect addBookAPI to be called with the correct parameters
    await waitFor(() =>
      expect(addBookAPI).toHaveBeenCalledWith({
        id: 0,
        name: "Test Book",
        author: "Test Author",
      })
    );
  });

  // Add more tests for updateStatus and deleteBook functions if needed
});
