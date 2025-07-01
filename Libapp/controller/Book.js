const express = require('express')
const router = express.Router();
const { filterBooksByGenre } = require('../domain/Book')

router.get('/',async(req,res) => {
  try {
    const books = await filterBooksByGenre(req.query.genre);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;