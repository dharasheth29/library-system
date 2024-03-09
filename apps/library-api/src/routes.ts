import express, { Request, Response } from "express";
import logger from "./utils/logger";
import { Book, BookStatus, BookUpdate } from "./interfaces/book.interface";

const router = express.Router();

let books: Book[] = [];

// To maintain in memory database, initiated an id here, which reset on every new build/run
let id = 1;

// POST - Create a new book record
router.post("/v1/book", (req: Request, res: Response) => {
  try {
    const { name, author }: Book = req.body;
    const newBook: Book = {
      id: id++,
      name,
      author,
      status: BookStatus.Available,
    };
    books.push(newBook);
    return res.status(201).json(newBook);
  } catch (error) {
    console.error(
      `An error ${error} occured while executing the route: POST v1/book`
    );
    throw error;
  }
});

// GET - Get a list of all books
router.get("/v1/books", (req: Request, res: Response) => {
  try {
    return res.status(200).json(books);
  } catch (error) {
    logger.error(
      `An error ${error} occured while executing the route: GET v1/books `
    );
    throw error;
  }
});

// PUT - Update an item
router.put("/v1/book/:id", (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { status }: BookUpdate = req.body;
    const itemIndex = books.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const newName = books[itemIndex].name;
      const newAuthor = books[itemIndex].author;
      books[itemIndex] = { id, name: newName, author: newAuthor, status };
      const updatedBook: BookUpdate = {
        id,
        name: newName,
        author: newAuthor,
        status,
      };
      return res.status(200).json(updatedBook);
    } else {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    logger.error(
      `An error ${error} occured while executing the route: PUT v1/book/:id `
    );
    throw error;
  }
});

// DELETE - delete a book by id
router.delete("/v1/book/:id", (req: Request, res: Response) => {
  try {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex((item) => item.id === bookId);
    if (bookIndex !== -1) {
      books.splice(bookIndex, 1);
      return res.status(200).json({ message: "Book deleted successfully" });
    } else {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    logger.error(
      `An error ${error} occured while executing the route: DELETE v1/book `
    );
    throw error;
  }
});

export default router;
