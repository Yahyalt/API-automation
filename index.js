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

module.exports = { createBook };
