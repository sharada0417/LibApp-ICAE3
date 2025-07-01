const express = require('express');
const app =express();
const port=3001;
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/libappDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);   
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})