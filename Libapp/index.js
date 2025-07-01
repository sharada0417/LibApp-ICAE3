const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');

app.use(express.json());

const bookcontroller = require('./controller/Book');

app.use('/books',bookcontroller);

mongoose.connect('mongodb://127.0.0.1:27017/libappDB', {
  
}).then(() => {
    console.log("MongoDB connected via Compass");
}).catch((error) => {
    console.error("Connection error:", error);
});



app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});