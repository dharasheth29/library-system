import { Book, BookStatus, BookUpdate } from "src/interfaces/Book.interface";

const hostUrl = "http://localhost:3000";

export const addBookAPI = async (bookData: Book): Promise<Book> => {
  try {
    const response = await fetch(`${hostUrl}/v1/book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    if (!response.ok) {
      throw new Error("Failed to add book");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
};

export const updateBookAPI = async (
  id: number,
  status: BookStatus
): Promise<BookUpdate> => {
  try {
    const response = await fetch(`${hostUrl}/v1/book/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    if (!response.ok) {
      throw new Error("Failed to update book");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating the book:", error);
    throw error;
  }
};

export const getBooksAPI = async (): Promise<Book[]> => {
  try {
    const response = await fetch(`${hostUrl}/v1/books`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get the books list");
    }

    return await response.json();
  } catch (error) {
    console.error("Error getting books list:", error);
    throw error;
  }
};

export const deleteBookAPI = async (id: number) => {
  try {
    const response = await fetch(`${hostUrl}/v1/book/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete book");
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting the book:", error);
  }
};
