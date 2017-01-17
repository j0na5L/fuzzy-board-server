var express = require('express');
var app = express();
var http = require('http').Server(app);
var socket = require('socket.io')(http);
var bodyParser = require('body-parser');
var cors = require('./middleware/cors');
var fuzzyController = require('./controllers/routes/fuzzy-controller');
var fuzzySocket = require('./controllers/socket/fuzzy-socket');

/* Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors);

/* Routing */

app.get('/v1/fuzzyboard', fuzzyController.getAll);
app.get('/v1/fuzzyboard/fuzzyitems/:id', fuzzyController.get);
app.delete('/v1/fuzzyboard/fuzztitems/:id', fuzzyController.remove);
app.put('/v1/fuzzyboard/fuzzyitems/:id', fuzzyController.update);
app.post('/v1/fuzzyboard/fuzzyitems', fuzzyController.add);

/*Socket*/
fuzztSocket(http);

http.listen(8080, function() {
    console.log('listening on *:8081');
});
