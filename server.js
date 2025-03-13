import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoutes from "./routes/librarymanagementapi.js";

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Database Connection Error:", err));

app.use("/api/books", bookRoutes);

app.listen(process.env.PORT || 5000, () => console.log(`🚀 Server running`));