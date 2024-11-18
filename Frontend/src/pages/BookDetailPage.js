import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/Book/BookDetail';
import { getBookById } from '../services/api';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

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
      <Header/>
      <h1>Book Detail</h1>
      <BookDetail book={book} />
      <Footer/>
    </div>
  );
};

export default BookDetailPage;