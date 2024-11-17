import React from 'react';
import Register from '../components/Auth/Register';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const RegisterPage = () => {
  return (  
    <div>
      <Header/>
      <div class ="content">
      <h1>Register</h1>
      </div>
      <Register />
      <Footer/>
    </div>
  );
};

export default RegisterPage;