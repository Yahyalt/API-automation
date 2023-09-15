const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

// Create an Axios instance
const instance = axios.create({
  baseURL: process.env.API_URL,
  auth: {
    username: process.env.BASIC_AUTH_USERNAME,
    password: process.env.BASIC_AUTH_PASSWORD,
  },
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

const createBook = async (book) => {
  try {
    const response = await instance.post('/Books', book);
    return response.data;
  } catch (error) {
    throw new Error('Error creating book');
  }
};

const deleteBook = async (book) => {
  try {
    const response = await instance.delete('/Book', {
      data: {
        isbn: book.isbn,
        userId: book.userId,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error deleting book');
  }
};


module.exports = { createBook, deleteBook };
