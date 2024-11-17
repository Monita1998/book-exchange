import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/Book/BookDetail';
import { getBookById } from '../services/api';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await getBookById(id);
      setBook(response.data);
    };
    fetchBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>Book Detail</h1>
      <BookDetail book={book} />
    </div>
  );
};

export default BookDetailPage;