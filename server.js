const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json()); // To parse incoming JSON requests
app.use(cors()); // Allow cross-origin requests (React frontend)

// Connect to MongoDB without deprecated options
mongoose.connect("mongodb://localhost:27017/Alib")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Define your Book schema and model
const bookSchema = new mongoose.Schema({
  booktitle: { type: String, required: true },
  author: { type: String, required: true },
  topic: { type: String, required: true },
  format: { type: String, required: true },
  pubYear: { type: Number, required: true },
});

const Book = mongoose.model("Book", bookSchema);

// Route to add a book
app.post("/addbooks", async (req, res) => {
  try {
    const { booktitle, author, topic, format, pubYear } = req.body;
    const newBook = new Book({ booktitle, author, topic, format, pubYear });
    await newBook.save();
    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    res.status(500).json({ message: "Failed to add book", error: error.message });
  }
});

// Route to fetch all books
app.get("/allbooks", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch books", error: error.message });
  }
});

// Route to update a book by ID
app.post("/updatebook/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: "Failed to update book", error: error.message });
  }
});

// Route to delete a book by ID
app.delete("/deletebook/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete book", error: error.message });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Backend server is running on port 5000");
});
