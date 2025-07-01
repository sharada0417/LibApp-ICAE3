const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');

app.use(express.json());

const bookcontroller = require('./controller/Book');
const studentcontroller = require('./controller/Student');
const borrowcontroller = require('./controller/Borrow');

app.use('/books',bookcontroller);
app.use('/students',studentcontroller);
app.use('/borrows', borrowcontroller);

mongoose.connect('mongodb://127.0.0.1:27017/libappDB', {
  
}).then(() => {
    console.log("MongoDB connected ");
}).catch((error) => {
    console.error("Connection error:", error);
});



app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});