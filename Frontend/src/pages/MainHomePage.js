import React from 'react';
import { Link } from 'react-router-dom';
import './MainHomePage.css'; // Ensure this file exists

const MainHomePage = () => {
  return (
    <div className="home-wrapper">
    <div className="home-container">
      <h1>Welcome to the Book Exchange Platform</h1>
      <div className="home-links">
        <Link to="/books">Add Books</Link>
        <Link to="/books">Browse Books</Link>
        <Link to="/books/search">Search Books</Link>
        <Link to="/profile">View Profile</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
    </div>
  );
};

export default MainHomePage;