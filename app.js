var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/rens');
var loginRouter = require('./routes/login');
var infoRouter = require('./routes/info');
var baoxiuRouter = require('./routes/baoxiu');
var tousuRouter = require('./routes/tousu');
var tongzhiRouter = require('./routes/tongzhi');
var newsRouter = require('./routes/news');
var guanliyuanRouter = require('./routes/guandenglu');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', indexRouter);
app.use('/api/students', usersRouter);
app.use('/api/news',newsRouter)
app.use('/api/tongzhi',tongzhiRouter)
app.use('/api/baoxiu',baoxiuRouter)
app.use('/api/tousu',tousuRouter)
app.use('/api/login',loginRouter)
app.use('/api/guanlogin',guanliyuanRouter)
// app.use('/api/info', infoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
