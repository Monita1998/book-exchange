import React, { useState } from 'react';
import BookSearch from '../components/Book/BookSearch';
import { searchBooks } from '../services/api';

const BookSearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    const response = await searchBooks(query);
    setSearchResults(response.data);
  };

  return (
    <div>
      <h1>Book Search</h1>
      <BookSearch onSearch={handleSearch} />
      <div>
        {searchResults.map(book => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;