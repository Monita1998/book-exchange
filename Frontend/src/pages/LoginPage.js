import React from 'react';
import Login from '../components/Auth/Login';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const LoginPage = () => {
  return (
    <div>
      <Header/>
      <div class ="content">
      <h1>Login</h1>
      </div>
      <Login />
      <Footer/>
    </div>
  );
};

export default LoginPage;