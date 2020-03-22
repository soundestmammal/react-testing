const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB setup


// Application Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'})); 
router(app);

// Server Setup
const PORT = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(PORT);
console.log("Server listening on Port: ", PORT);

/*
app.use is to use middlewares,

any request passed into our application will first pass through bodyParser and morgan.

morgan is a logging framework! logging incoming requests. (Used for debugging)

bodyParser: will parse any incoming request into json
*/