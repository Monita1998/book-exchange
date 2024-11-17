import React, { useEffect, useState } from 'react';
import BookList from '../components/Book/BookList';
import { getBooks } from '../services/api';

const BookListPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <BookList books={books} />
    </div>
  );
};

export default BookListPage;