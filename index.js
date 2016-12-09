// Dependencies
var bodyParser      = require('body-parser');
var express 		= require('express');
var session 		= require('express-session');
var favicon 		= require('serve-favicon');
var methodOverride  = require('method-override');
var moment 			= require('moment');
var morgan          = require('morgan');
var path 			= require('path');
var request     	= require('request');
var WeDeploy 		= require('wedeploy').WeDeploy;
var app 			= express();

app.use(morgan('combined'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Routes
// ------------------------------------------------------
var user = require('./app/routes/user');
var team = require('./app/routes/team');
var product = require('./app/routes/product');

app.use('/user', user);
app.use('/team', team);
app.use('/product', product);


app.listen(80, function () {
  console.log('Listening on port 80');
});
