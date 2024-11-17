import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homeImage from '../assets/images/home-image.jpg';

const Home = () => {
  return (
    <div className="home-wrapper">
      <img src={homeImage} alt="Book Exchange" className="home-image" />
      <div className="home-container">
        <h1>Welcome</h1>
        <p>
          Discover, exchange, and share your favorite books with others. Whether you're looking to borrow, lend, or exchange books, our platform makes it easy and convenient.
        </p>
        <p><h3>
        "A room without books is like a body without a soul."
            — Marcus Tullius Cicero
        </h3></p>
        <div className="home-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        <div>
          <p>&copy; 2024 Book Exchange Platform</p>
        </div>
      </div>
    </div>
  );
};

export default Home;