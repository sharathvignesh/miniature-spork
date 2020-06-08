require('dotenv').config()

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var recipeRouter = require('./routes/recipe');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/recipes', recipeRouter);

app.get('/', (req,res) => {
  res.json({ message: "Hello API" });
})

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({success: false, error: err.message || "ERRR"})
});


module.exports = app;
