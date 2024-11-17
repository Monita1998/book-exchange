import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import BookListPage from './pages/BookListPage';
import BookSearchPage from './pages/BookSearchPage';
import BookDetailPage from './pages/BookDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/books" element={<BookListPage />} />
        <Route path="/books/search" element={<BookSearchPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;