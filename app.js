var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var input=require('./routes/input');
var output=require('./routes/output');

var axios=require('axios');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/input',input);
app.post('/output',function (req,res) {
    var axios = require('axios');
    var url="https://"+req.param('sub-domain')+".zendesk.com/api/v2/tickets.json";
    axios({
        method: 'get',
        url: url,
        auth:
            {
                username: req.param('email')+'/token',
                password: req.param('token')
            }
    }).then(function(response){
        //console.log(response.data.tickets);
       res.render('index', { title:  response.data.tickets});
    }).catch(function (error) {
        res.render('error');
       // console.log(error);
    });
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
