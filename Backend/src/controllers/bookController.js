// src/controllers/bookController.js
const bookService = require('../services/bookService.js');

class BookController {
  async createBook(req, res) {
    try {
      const {title, author } = req.body;
      const userId = req.user.id;
      const book = await bookService.createBook(title, author, userId);
      res.status(201).json({ message: 'Book created successfully', book });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getBooks(req, res) {
    try {
      const books = await bookService.getBooks();
      res.json({ books });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getBookById(req, res) {
    try {
      const { id } = req.params;
      const book = await bookService.getBookById(id);
      res.json({ book });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateBook(req, res) {
    try {
      const { id } = req.params;
      const { title, author } = req.body;
      const userId = req.user.id;
      const book = await bookService.updateBook(id, title, author, userId);
      res.json({ message: 'Book updated successfully', book });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteBook(req, res) {
    try {
      const { id } = req.params;
      const userId = req.user.id;
      const book = await bookService.deleteBook(id, userId);
      res.json({ message: 'Book deleted successfully', book });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new BookController();