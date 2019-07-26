const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

// Application Setup
const app = express();
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
morgan is a logging framework! logging incoming requests

bodyParser: will parse them into json that is incoming
*/