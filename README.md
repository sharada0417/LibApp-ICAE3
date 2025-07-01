# Library Management System API

This is a RESTful API for a library management system built with Node.js, Express, and MongoDB. It allows users to manage books, students, and borrowing records. The API supports filtering books by genre, filtering students by year, and creating borrow records for students and books.

## Prerequisites

- Node.js (v14 or higher recommended)
- MongoDB (local or cloud instance)
- (Optional) MongoDB Compass for easier database management

## Installation

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/sharada0417/LibApp-ICAE3>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd <libApp>
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the MongoDB server:**
   - If using a local MongoDB instance, run:
     ```bash
     mongod
     ```
   - If using MongoDB Atlas, ensure your connection string is correctly set in `index.js`.

5. **Run the application:**
   ```bash
   node index.js
   ```

The server will start on `http://localhost:3001`.

## API Endpoints

### 1. Filter Books by Genre

- **Method:** `GET`
- **URL:** `/books`
- **Description:** Retrieves a list of books filtered by the specified genre.
- **Query Parameter:** `genre` (string) - The genre to filter by (e.g., "JavaScript").
- **Example Request:**
  ```http
  GET http://localhost:3001/books?genre=JavaScript
  ```
- **Example Response:**
  ```json
  [
    {
      "_id": "book3",
      "title": "You Don’t Know JS",
      "author": "Kyle Simpson",
      "isbn": "9781491904244",
      "copiesAvailable": 1,
      "genre": "JavaScript",
      "publishedDate": "2015-12-27T00:00:00.000Z",
      "updatedAt": "2025-06-03T09:54:15.681Z"
    },
    {
      "_id": "book4",
      "title": "Eloquent JavaScript",
      "author": "Marijn Haverbeke",
      "isbn": "9781593279509",
      "copiesAvailable": 4,
      "genre": "JavaScript",
      "publishedDate": "2018-12-04T00:00:00.000Z"
    },
    {
      "_id": "book9",
      "title": "JavaScript: The Good Parts",
      "author": "Douglas Crockford",
      "isbn": "9780596517748",
      "copiesAvailable": 3,
      "genre": "JavaScript",
      "publishedDate": "2008-05-15T00:00:00.000Z"
    }
  ]
  ```

### 2. Filter Students by Year

- **Method:** `GET`
- **URL:** `/students`
- **Description:** Retrieves a list of students filtered by the specified year.
- **Query Parameter:** `year` (number) - The year to filter by (e.g., 2).
- **Example Request:**
  ```http
  GET http://localhost:3001/students?year=2
  ```
- **Example Response:**
  ```json
  [
    {
      "_id": "stu1",
      "name": "Alice Smith",
      "email": "alice@example.com",
      "studentId": "S001",
      "department": "Computer Science",
      "year": 2
    },
    {
      "_id": "stu5",
      "name": "Eva Brown",
      "email": "eva@example.com",
      "studentId": "S005",
      "department": "Cybersecurity",
      "year": 2
    }
  ]
  ```

### 3. Borrow a Book

- **Method:** `POST`
- **URL:** `/borrows`
- **Description:** Creates a new borrow record for a student and a book.
- **Request Body:** JSON object with `studentId` (string) and `bookId` (string).
- **Example Request:**
  ```http
  POST http://localhost:3001/borrows
  {
    "studentId": "stu1",
    "bookId": "book1"
  }
  ```
- **Example Response:**
  ```json
  {
    "student": "stu1",
    "book": "book1",
    "returnDate": null,
    "returned": false,
    "_id": "6864232ceda74f5f3d89c7b7",
    "borrowDate": "2025-07-01T18:04:28.351Z",
    "createdAt": "2025-07-01T18:04:28.370Z",
    "updatedAt": "2025-07-01T18:04:28.370Z",
    "__v": 0
  }
  ```

## Testing the API

You can test the API using tools like [Postman](https://www.postman.com/) or `curl`. Ensure the server is running, then send requests to `http://localhost:3001`.

### Example `curl` Commands

- **Filter books by genre:**
  ```bash
   GET "http://localhost:3001/books?genre=JavaScript"
  ```

- **Filter students by year:**
  ```bash
     GET "http://localhost:3001/students?year=2"
  ```

- **Borrow a book:**
  ```bash
     POST "http://localhost:3001/borrows" -H "Content-Type: application/json" -d '{"studentId": "stu1", "bookId": "book1"}'
  ```

## Additional Notes

- **Database Management:** Use [MongoDB Compass](https://www.mongodb.com/products/compass) to view and manage the `books`, `students`, and `borrows` collections.
- **Input Validation:** Ensure that `studentId` and `bookId` exist in the database when making borrow requests. The API will return appropriate error messages if validation fails.
- **API Security:** This API does not currently implement authentication or authorization. For production use, consider adding security Ved security measures.
