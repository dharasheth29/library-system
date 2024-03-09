import { useEffect, useState } from "react";
import { Book, BookStatus } from "src/interfaces/Book.interface";
import { BookTable, TableCell, TableHeaderCell, TableRow } from "./style";
import _ from "lodash";
import {
  addBookAPI,
  deleteBookAPI,
  getBooksAPI,
  updateBookAPI,
} from "src/functions/BookAPI.function";

const AddViewBook = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState<Book>({
    id: 0,
    name: "",
    author: "",
  });

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const addBook = async () => {
    if (newBook.name?.trim() === "" || newBook.author?.trim() === "") {
      return; // Prevent adding empty books
    }
    const newAddedBook: Book = await addBookAPI(newBook);
    setBooks([
      ...books,
      {
        ...newAddedBook,
      },
    ]);
    setNewBook({ id: 0, name: "", author: "" });
  };

  const updateStatus = async (e: any) => {
    const { value } = e.target;
    const [id, status] = value.split(",");
    await updateBookAPI(id, status);

    const updatedBooks = [...books];
    const index = updatedBooks.findIndex((book) => book.id === parseInt(id));
    if (index !== -1) {
      updatedBooks[index].status = status;
    }
    setBooks(updatedBooks);
  };

  const deleteBook = async (index: number, id: number) => {
    await deleteBookAPI(id);
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  const getBooks = async () => {
    setBooks(await getBooksAPI());
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <div>
        <h1>Add/View books</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addBook();
          }}
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Book Name"
              value={newBook.name}
              onChange={handleInputChange}
            />
            <div style={{ margin: "10px 0" }}></div>
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={newBook.author}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ margin: "10px 0" }}></div>
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div>&nbsp;</div>
      <div>
        <h2>Books</h2>
        <BookTable>
          <thead>
            <TableRow style={{ justifyContent: "left" }}>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Author</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Delete</TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <TableRow key={index}>
                <TableCell>{_.capitalize(book.name)}</TableCell>
                <TableCell>{_.capitalize(book.author)}</TableCell>
                <TableCell>
                  <select
                    name="status"
                    value={book.id + "," + book.status}
                    onChange={updateStatus}
                  >
                    {Object.values(BookStatus).map((status) => (
                      <option key={status} value={book.id + "," + status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </TableCell>
                <TableCell>
                  <button onClick={() => deleteBook(index, book.id)}>
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </BookTable>
      </div>
    </div>
  );
};

export default AddViewBook;
