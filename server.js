// var express = require('express')
// var app = express()

// app.set('port', (process.env.PORT || 5000))
// app.use(express.static(__dirname + '/public'))

// app.get('/', function(request, response) {
//   response.send('Hello World!')
// })

// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// // })



// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 5000;
// var mongoose = require('mongoose');
var path = require('path');

// var configDB = require('./config/database.js');

// configuration ===============================================================
// mongoose.connect(configDB.url); // connect to our database

// require('./config/passport')(passport); // pass passport for configuration

app.configure(function() {

	// set up our express application
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms
	app.use(express.static(__dirname + '/public'));
	app.use('view engine', 'ejs'); // set up ejs for templating

	// required for passport
	app.use(express.session({ secret: 'anuj' })); // session secret
 // persistent login sessions

});

app.get('/', function(request, response) {
  response.send('Hello World!')
})
// routes ======================================================================
//require('./app/routes.js')(app); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The port ' + port);
