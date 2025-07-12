# API Automation Testing

A comprehensive API automation testing suite built with Jest and Axios for testing RESTful APIs. This project demonstrates automated testing of a bookstore API with features for creating and deleting books.

## 🚀 Features

- **API Testing**: Automated testing of RESTful APIs using Jest and Axios
- **Authentication**: Basic authentication support for secure API endpoints
- **HTML Reports**: Beautiful HTML test reports generated automatically
- **Environment Configuration**: Flexible environment setup using `.env` files
- **Error Handling**: Comprehensive error handling and validation
- **Modular Structure**: Clean, maintainable code structure

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 20.6.0 or higher)
- **NPM** (version 9.8.1 or higher)
- **Git** (for cloning the repository)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yahyhfidz97/API-automation.git
   cd API-automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp example.env .env
   ```
   
   Edit the `.env` file with your API credentials:
   ```env
   API_URL=https://bookstore.toolsqa.com/BookStore/v1
   BASIC_AUTH_USERNAME=your_username
   BASIC_AUTH_PASSWORD=your_password
   ```

## 🔧 Usage

### Running Tests

**Run all tests:**
```bash
npm run test
```

**Run tests with Jest directly:**
```bash
npm run jest
```

### Viewing Test Reports

After running tests, you can view the detailed HTML report:

1. Open `jest_html_reporters.html` in your browser
2. The report will show:
   - Test results overview
   - Passed/failed tests
   - Execution time
   - Code coverage (if configured)

## 📁 Project Structure

```
API-automation/
├── test/
│   └── index.test.js          # Test cases for API endpoints
├── jest-html-reporters-attach/
│   └── jest_html_reporters/   # HTML reporter assets
├── index.js                   # Main API functions
├── package.json              # Project dependencies and scripts
├── example.env               # Environment variables template
├── .env                      # Your environment variables (create from example.env)
├── jest_html_reporters.html  # Generated test report
└── README.md                 # This file
```

## 🧪 API Endpoints Tested

This project tests the following API endpoints:

### Books API
- **POST** `/Books` - Create a new book
- **DELETE** `/Book` - Delete a book by ISBN

### Test Cases
1. **Create Book Test**: Validates book creation with proper data structure
2. **Delete Book Test**: Validates book deletion functionality

## 🔍 API Functions

### `createBook(bookData)`
Creates a new book in the system.

**Parameters:**
```javascript
const bookData = {
  userId: 'string',
  collectionOfIsbns: [
    {
      isbn: 'string'
    }
  ]
};
```

### `deleteBook(bookData)`
Deletes a book from the system.

**Parameters:**
```javascript
const bookData = {
  isbn: 'string',
  userId: 'string'
};
```

## 🔑 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `API_URL` | Base URL for the API | `https://bookstore.toolsqa.com/BookStore/v1` |
| `BASIC_AUTH_USERNAME` | Username for basic authentication | `your_username` |
| `BASIC_AUTH_PASSWORD` | Password for basic authentication | `your_password` |

## 📊 Test Configuration

The project uses Jest with custom configuration:

- **HTML Reporter**: Generates beautiful HTML reports
- **Default Reporter**: Console output for development
- **Custom Report Path**: Reports saved to `./reports` directory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Best Practices

- Always run tests before committing changes
- Update tests when adding new API endpoints
- Keep environment variables secure and never commit `.env` files
- Use descriptive test names and assertions
- Add proper error handling for new API functions

## 🐛 Troubleshooting

**Common Issues:**

1. **Authentication Errors**: Check your credentials in `.env` file
2. **Network Errors**: Verify API URL and internet connection
3. **Test Failures**: Check API endpoint availability and response format

**Getting Help:**
- Check the HTML test report for detailed error messages
- Review the console output for debugging information
- Ensure all environment variables are properly set

## 📄 License

This project is licensed under the ISC License.

## 👤 Author


- GitHub: [@Yahyalt](https://github.com/Yahyalt)

---

⭐ **Star this repository if you find it helpful!**