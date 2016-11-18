/**
 * Friendpool
 * 
 * Authors: Andrew Van, Alex Lee, Tim Banh
 */
var PORT = 3000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');

var riderhome = require('./routes/riderhome')

app.engine('handlebars', exphbs({defaultlayout: 'main'}));
app.set('view engine', 'handlebars');

// Return all pages in the /static directory
// whenever they are requested at '/'
app.use(express.static(__dirname + '/static'));

//var confirm = require('./routes/confirm.js');
//var drivertime = require('./routes/drivertime.js');
//var rideaccepted = require('./routes/rideaccepted.js');
//var riderhome = require('./routes/riderhome.js');

app.get('/riderhome', riderhome.view);

app.get('/', function(req, res) {
    res.render('index')
});
app.get('/confirm', function(req, res) {
    res.render('confirm')
});
app.get('/drivertime', function(req, res) {
    res.render('drivertime')
});
app.get('/rideaccepted', function(req, res) {
    res.render('rideaccepted')
});
app.get('/cancelrequest', function(req, res) {
    res.render('cancelrequest')
});
app.get('/ridecanceled', function(req, res) {
    res.render('ridecanceled')
});
app.get('/ridedenied', function(req, res) {
    res.render('ridedenied')
});
app.get('/driverrider', function(req, res) {
    res.render('driverrider')
});
app.get('/help', function(req, res) {
    res.render('help')
});
app.get('/loading', function(req, res) {
    res.render('loading')
});
app.get('/settings', function(req, res) {
    res.render('settings')
});
app.get('/thanks', function(req, res) {
    res.render('thanks')
});
app.get('/riderinfo', function(req, res) {
    res.render('riderinfo')
});

// Start the server
var port = process.env.PORT || PORT; // 80 for web, 3000 for development
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});