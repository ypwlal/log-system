var express = require('express');
var bodyParser = require('body-parser');
var routes = require("./routes");

var app = express();
var PORT = process.env.PORT ? process.env.PORT : 8088;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(routes);

exports.app = app;
