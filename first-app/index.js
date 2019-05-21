// const http = require('http');

// http.createServer(function(request, response) {
//    // Set the response HTTP header with HTTP status and Content type
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    // Send the response body "Hello World"
//    response.end('My first app');
// }).listen(3000);

// console.log('server running at 3000');

const express = require('express');
var logger = require('morgan');

var wiki = require('./wiki.js');

// let app = express();
import express from 'express';

let mongo = require('./db.js');

app.use(logger('dev'));
app.use('/wiki', wiki);
app.use(mongo);

app.get('/', (req, res) => {
    res.send('Express App');
});

app.listen(3000, () => {
    console.log('Server Listening at 3000');
});