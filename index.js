const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser =require ('body-parser');
const mongoose = require('mongoose');

const router = require('./router');

// DB Setup 
mongoose.connect('mongodb://localhost: auth/auth', { useNewUrlParser: true });

// App setup
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup ...
const port = process.env.PORT || 3090
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
