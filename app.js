var express 		= require('express');
var path 			= require('path');
var favicon 		= require('serve-favicon');
var logger 			= require('morgan');
var cookieParser	= require('cookie-parser');
var bodyParser 		= require('body-parser');
var mongoose  		= require('mongoose');

// Config file
var config 			= require('./config/config.js');

// Libraries
var log 			= require('./lib/log.js');

// -------------------------------------------------------------------

var app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
 });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || config.CONFIG_PORT);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
var routes 			= require('./routes/index');
var users 			= require('./routes/users');

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json(err);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json(err);
});

// Mongoose initialization
log.progress('app.js', 'MongoDB connecting --> Starting...');
mongoose.connect(config.CONFIG_DB, function(err) {
  if (err) { 
  	log.error('app.js', 'MongoDB connecting --> Error');
  }
  else {
	  log.info('app.js', 'MongoDB connecting --> Start with success');
	  log.info('app.js', "API is now ready to use");
  }
});

module.exports = app;
