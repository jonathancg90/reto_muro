
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var flash    = require('connect-flash');
var passport = require('passport');
var session = require('express-session');
var passportConfig  = require('./config/passport');
var authentication  = require('./middlewares/authentication');

//Routes
var routes = require('./routes/index');
var auth = require('./routes/auth');
var users = require('./routes/users');
//Start app
var app = express();

// view engine setup (directories)
app.set('views', path.join(__dirname, 'views'));
app.set('partials', {header: 'header'});
app.locals.partials = {base:'base'};
app.set('view engine', 'hjs');
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'mySecretKey',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 
app.use(authentication());

//Routes
app.use('/', routes);
app.use('/', auth);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers


//Mongodb
var configDB = require('./config/database.js');

mongoose.connect(configDB.url);
var User = require('./models/User');
//Passport
passportConfig(passport, User);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
