const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const key = require('./info/keys');
const cors = require('cors');

// DB setup
//console.log(key);
// console.log(`mongodb+srv://pg:${key}@cluster0-ciic4.mongodb.net/test?retryWrites=true&w=majority`);
mongoose.connect(`mongodb+srv://pg:${key}@cluster0-ciic4.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true})
.then(() => console.log("SUCCESSFULLY CONNECTED TO THE DATABASE"))
.catch(e => console.log("There was an error in connecting to the database", e),);

// Application Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'})); 
router(app);

module.exports = app;

/*
app.use is to use middlewares,

any request passed into our application will first pass through bodyParser and morgan.

morgan is a logging framework! logging incoming requests. (Used for debugging)

bodyParser: will parse any incoming request into json
*/