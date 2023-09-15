const { resolve } = require('path');
const { createBook, deleteBook } = require('../index');


describe('Create & Delete Book', () => {
  
  test('should create a new Book successfully', async () => {
    const bookData = {
      userId: 'd853995b-c600-441e-96c3-6712ed731b9f',
      collectionOfIsbns: [
        {
          isbn: '9781449325862',
        },
      ],
    };
    const response = await createBook(bookData);
    expect(response).toBeDefined();
    expect(response.books).toBeDefined();
    expect(response.books.length).toBe(1);
    expect(response.books[0].isbn).toBe('9781449325862');
 });

 test('should delete a Book successfully', async () => {
  const bookData = {
    isbn: '9781449325862',
    userId: 'd853995b-c600-441e-96c3-6712ed731b9f'
  };

  const response = await deleteBook(bookData);
  // Check if response is an empty string
  expect(response).toBe("");
 });
});
