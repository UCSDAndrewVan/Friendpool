/**
 * Friendpool
 * 
 * Authors: Andrew Van, Alex Lee, Tim Banh
 */
var PORT = 3000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');

// Create the server instance
var app = express();

var exphbs = require('express-handlebars');

// Sets the templating engine to be handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Print logs to the console and compress pages we send
app.use(express.logger());
app.use(express.compress());

// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.html
// maps to /static/index.html on this machine
app.use(express.static(__dirname + '/static'));

// Require the routes folder
var confirm = require('./routes/confirm.js');
var drivertime = require('./routes/drivertime.js');
var rideaccepted = require('./routes/rideaccepted.js');
var riderhome = require('./routes/riderhome.js');

// Set up routing for requests
app.get('/rideaccepted', function(req, res) {
    res.render('rideaccepted');
});

app.get('/riderhome', function(req, res) {
    res.render('riderhome');
});

app.get('/confirm', function(req, res) {
    res.render('confirm');
});

app.get('/drivertime', function(req, res) {
    res.render('drivertime');
});

// Start the server
var port = process.env.PORT || PORT; // 80 for web, 3000 for development
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});