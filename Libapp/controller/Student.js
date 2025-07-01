const express = require('express');
const router = express.Router();
const {filterStudentsByYear} = require('../domain/Student')

router.get('/',async(req,res) => {
  try {
    const students = await filterStudentsByYear(req.query.year);
    res.json(students);
  } catch (error) {
    res.status(500).json({ error:error.message });
  }
});
module.exports = router;