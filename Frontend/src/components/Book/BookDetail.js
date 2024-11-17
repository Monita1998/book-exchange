import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Condition: {book.condition}</p>
      <p>Availability: {book.availability ? 'Available' : 'Not Available'}</p>
    </div>
  );
};

export default BookDetail;