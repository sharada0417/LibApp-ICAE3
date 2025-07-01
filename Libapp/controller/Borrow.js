const express = require('express');
const router = express.Router();
const { borrowBook } = require('../domain/borrow');

router.post('/', async (req, res) => {
  try {
    const { studentId, bookId } = req.body;
    const borrow = await borrowBook(studentId, bookId);
    res.status(201).json({ message: 'Book borrowed successfully', borrow });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;