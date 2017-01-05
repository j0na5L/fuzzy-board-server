var express = require('express');
var app = express();
var http = require('http').Server(app);
var socket = require('socket.io')(http);
var bodyParser = require('body-parser');
var corsFilter = require('./middleware/cors-filter');
var fuzzyController = require('./controllers/routes/fuzzy-controller');
var fuzzySocket = require('./controllers/socket/fuzzy-socket');

/* Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(corsFilter);

/* Routing */

app.get('/v1/fuzzyboard', fuzzyController.getAll());
