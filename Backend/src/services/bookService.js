// src/services/bookService.js
const Book = require('../models/Book');
const User = require('../models/User');

class BookService {
  async createBook(title, author, userId) {
    const book = await Book.create({ title, author, user_id: userId });
    return book;
  }

  async getBooks() {
    const books = await Book.findAll({ include: User });
    return books;
  }

  async getBookById(id) {
    const book = await Book.findByPk(id, { include: User });
    if (!book) {
      throw new Error('Book not found');
    }
    return book;
  }

  async updateBook(id, title, author, userId) {
    const book = await Book.findByPk(id);
    if (!book) {
      throw new Error('Book not found');
    }
    if (book.user_id !== userId) {
      throw new Error('Unauthorized');
    }
    book.title = title;
    book.author = author;
    await book.save();
    return book;
  }

  async deleteBook(id, userId) {
    const book = await Book.findByPk(id);
    if (!book) {
      throw new Error('Book not found');
    }
    if (book.user_id !== userId) {
      throw new Error('Unauthorized');
    }
    await book.destroy();
    return book;
  }
}

module.exports = new BookService();