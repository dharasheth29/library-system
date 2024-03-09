import request from "supertest";
import express from "express";
import router from "./routes";

const app = express();
app.use(express.json());
app.use("/", router); // Mount the router on the app

describe("Book API Endpoints", () => {
  let testBookId: number;

  // Test POST /v1/book
  it("should create a new book", async () => {
    const response = await request(app)
      .post("/v1/book")
      .send({ name: "Test Book", author: "Test Author" });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("id");
    testBookId = response.body.id; // Save the ID for later tests
  });

  // Test GET /v1/books
  it("should return a list of all books", async () => {
    const response = await request(app).get("/v1/books");
    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  // Test PUT /v1/book/:id
  it("should update the status of a book", async () => {
    const response = await request(app)
      .put(`/v1/book/${testBookId}`)
      .send({ status: "Borrowed" });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("status", "Borrowed");
  });

  // Test DELETE /v1/book/:id
  it("should delete a book", async () => {
    const response = await request(app).delete(`/v1/book/${testBookId}`);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty(
      "message",
      "Book deleted successfully"
    );
  });
});
