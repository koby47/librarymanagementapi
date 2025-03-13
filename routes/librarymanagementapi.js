import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import { createBook, getBooks, getBookById, updateBook, deleteBook } from "../controllers/librarymanagementapi.js";

const router = express.Router();

router.route("/")
  .post(upload.single("image"), createBook) // No authentication needed
  .get(getBooks);

router.route("/:id")
  .get(getBookById)
  .put(upload.single("image"), updateBook) // No authentication needed
  .delete(deleteBook); // No authentication needed

export default router;
