const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const {logger} = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

// const mongoose = require('mongoose')

console.log(__dirname)

//custom middleware logger
app.use(logger);

//middleware for handling urlencoded form data 
app.use(express.urlencoded({ extended: false }));

//middleware for json
app.use(express.json());

//Cross origin resuorce sharing
// app.use(cors());

//servw static files
app.use('/', express.static(path.join(__dirname,'public')));

app.get('/', (req,res) => {
    res.send('hello world !');
})


app.use(errorHandler);

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`)
});



