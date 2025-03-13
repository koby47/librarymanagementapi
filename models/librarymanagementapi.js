import mongoose from "mongoose";
import normalizeMongoose from "normalize-mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  genre: { type: String, required: true },
  availableCopies: { type: Number, default: 1 }
});

// Apply normalization
bookSchema.plugin(normalizeMongoose);

export default mongoose.model("Book", bookSchema);
