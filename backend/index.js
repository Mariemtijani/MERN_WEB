require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;
const connectDB = require('./config/dbConnect')
const mongoose = require('mongoose')

connectDB()

mongoose.connection.once('open' , () => {
    console.log('Connected to mongoDb');
    app.listen(PORT , () => {
        console.log(`Server running on port ${PORT}`);
})
})

mongoose.connection.on('error', err => {
    console.log(err)
})





