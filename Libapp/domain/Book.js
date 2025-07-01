const Book = require('../models/Book')

const filterBooksByGenre = async (genre) => {
  return await Book.find({ genre });
};

module.exports = { filterBooksByGenre };