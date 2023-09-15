const { createBook } = require('../index');


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

 

 

 
});
