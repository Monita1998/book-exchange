import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './AuthContext'; // Ensure this file exists
import './App.css'; // Ensure this file exists
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);