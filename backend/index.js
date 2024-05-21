require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const credentails = require('./middleware/credentails');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const {logger} = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnect');

const PORT = process.env.PORT || 3500;

//connect to mongoDB
connectDB();

//custom middleware logger
app.use(logger);

//handle options crendentails check
app.use(credentails);

//Cross origin resuorce sharing
app.use(cors(corsOptions));

//middleware for handling urlencoded form data 
app.use(express.urlencoded({ extended: false }));

//middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//servw static files
app.use('/', express.static(path.join(__dirname,'public')));

//routes
app.use('/' , require('./routes/root'));
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'));
app.use('/refresh' , require('./routes/refresh'));
app.use('/logout' , require('./routes/logout'));

//anything after the verifyJWT will use the token 
app.use(verifyJWT);
app.use('/artisans' , require('./routes/api/artisans'));
app.use('/users', require('./routes/api/user'));
app.use('/categories', require('./routes/api/category'));
app.use('/services', require('./routes/api/service'));

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});


app.use(errorHandler);

mongoose.connection.once('open' , () => {
    console.log('Connected to mongoDb');
    app.listen(PORT , () => {
        console.log(`Server running on port ${PORT}`)
    });
})






