const Student = require('../models/Student');

const filterStudentsByYear = async (year) => {
  return await Student.find({ year });
}

module.exports = { filterStudentsByYear };