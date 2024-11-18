import React from 'react';
import AddBook from '../components/Book/AddBook';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const AddBookPage = () => {
  return (
    <div>
      <Header/>
      <div class ="content">
      <h1>Add Book</h1>
      </div>
      <AddBook />
      <Footer/>
    </div>
  );
};

export default AddBookPage;