import Book from "../models/librarymanagementapi.js";
import { bookSchema } from "../validators/librarymanagementapi.js";

// 📌 Add a new book (With Validation)
export const createBook = async (req, res) => {
  const { error, value } = bookSchema.validate(req.body, { abortEarly: false });
  if (error) return res.status(422).json({ errors: error.details.map(err => err.message) });

  try { res.status(201).json(await Book.create(value)); } 
  catch (err) { res.status(500).json({ error: err.message }); }
};

// 📌 Fetch all books
export const getBooks = async (req, res) => {
  res.json(await Book.find());
};

// 📌 Get a single book by ID
export const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  book ? res.json(book) : res.status(404).json({ error: "Book not found" });
};

// 📌 Update a book (With Validation)
export const updateBook = async (req, res) => {
  const { error, value } = bookSchema.validate(req.body, { abortEarly: false });
  if (error) return res.status(422).json({ errors: error.details.map(err => err.message) });

  const book = await Book.findByIdAndUpdate(req.params.id, value, { new: true });
  book ? res.json(book) : res.status(404).json({ error: "Book not found" });
};

// 📌 Remove a book
export const deleteBook = async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  book ? res.json({ message: "Book deleted" }) : res.status(404).json({ error: "Book not found" });
};