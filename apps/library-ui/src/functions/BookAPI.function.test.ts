import { Book, BookStatus, BookUpdate } from "src/interfaces/Book.interface";
import {
  addBookAPI,
  deleteBookAPI,
  getBooksAPI,
  updateBookAPI,
} from "./BookAPI.function";

describe("Book API Functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should add a book", async () => {
    const mockBookData: Book = {
      id: 1,
      name: "Book 1",
      author: "Author 1",
    };

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockBookData),
    });

    const addedBook = await addBookAPI(mockBookData);

    expect(addedBook).toEqual(mockBookData);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/v1/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mockBookData),
    });
  });

  it("should update the book", async () => {
    const bookId = 1;
    const mockBookData: BookUpdate = {
      status: BookStatus.Available,
    };

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockBookData),
    });

    const updatedBook = await updateBookAPI(bookId, BookStatus.Available);
    expect(updatedBook).toEqual(mockBookData);
    expect(fetch).toHaveBeenCalledWith(
      `http://localhost:3000/v1/book/${bookId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mockBookData),
      }
    );
  });

  it("should get all the books", async () => {
    const bookId = 1;
    const mockBookData: Book[] = [
      {
        status: BookStatus.Available,
        id: bookId,
      },
    ];

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockBookData),
    });

    const books = await getBooksAPI();
    expect(books).toEqual(mockBookData);
    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/v1/books`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  it("should delete the book data", async () => {
    const bookId = 1;
    const mockBookData = {
      message: "Book deleted",
    };

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockBookData),
    });

    const deletedBook = await deleteBookAPI(bookId);

    expect(deletedBook).toEqual(mockBookData);
    expect(fetch).toHaveBeenCalledWith(
      `http://localhost:3000/v1/book/${bookId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
});
