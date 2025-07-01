const Borrow = require('../models/Borrow');
const Book = require('../models/Book');

const borrowBook = async(studentId , bookId) => {
  const book = await Book.findById(bookId);
  if(!book || book.copiesAvailable < 1){
    throw new Error ('Book unavailable');
  }
  const borrow = new Borrow({ student:studentId , book:bookId});
  book.copiesAvailable -=1;
  await book.save();
  await borrow.save();
  return borrow;
};
module.exports = { borrowBook };