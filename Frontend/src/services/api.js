// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    localStorage.setItem('token', response.data.token);
    return response.data.token;
  } catch (error) {
    throw error.response.data;
  }
};

export const getProfile = async () => {
  try {
    const response = await api.get('/users/profile');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateProfile = async (profileData) => {
  try {
    const response = await api.post('/users/profile', profileData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createBook = async (bookData) => {
  const token = localStorage.getItem('token');
  try {
    const response = await api.post('/books', bookData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookData),
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getBooks = async () => {
  try {
    const response = await api.get('/books');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getBookById = async (bookId) => {
  try {
    const response = await api.get(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const searchBooks = async (query) => {
  try {
    const response = await api.get(`/books/search?q=${query}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};