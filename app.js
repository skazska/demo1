var express = require('express');
var path = require('path');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());


//mongo DB used for mapping and store
var MongoClient = require('mongodb').MongoClient;
// Use connect method to connect to the Server
MongoClient.connect("mongodb://ersCloud:375612@localhost:27017/ersCloud", function(err, db) {

  if (err) {
    console.error(new Error('db failed'));
//    process.exit(1);
  }

  //add response shortcuts
  app.use(function(req, res, next){
    //to set status and response
    res.xSet = function(status, data, next, contentType){
      this.xStatusCode = status;
      this.xContentType = contentType||'application/json';
      this.xData = data;
      if (next && ( typeof next == 'function' )) next();
    };
    next();
  });


  var apiController = require('./controllers/api')(db);
  var apiRoutes = require('./routes/api')(apiController);
  app.use('/api', apiRoutes);

  //send json response, actually
  app.use(function(req,res,next){
    if (res.xData||res.xStatusCode) {
      if (res.xContentType) {
        res.setHeader('Content-Type', res.xContentType);
        if (res.xContentType == 'application/json'){
          res.end(JSON.stringify(res.xData, null, 2));
        } else {
          res.end(res.xData);
        }
      } else {
        if (res.xData) console.log(res.xStatusCode+' response with no contentType! ');
        next();
      }
    } else {
      next();
    }
  });

// catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    if (!res.xStatusCode || (res.xStatusCode && res.statusCode < 400)) res.statusCode = err.status||500;
    res.setHeader('Content-Type', res.xContentType||'text');
    res.end(err.stack);
    next(err);
  });
} else {
// production error handler
// no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    if (!res.xStatusCode || (res.xStatusCode && res.statusCode < 400)) res.statusCode = err.status||500;
    res.setHeader('Content-Type', res.xContentType||'text');
    res.end(err.message);
    next(err);
  });

}



module.exports = app;