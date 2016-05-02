/**
 * Created by dante on 4/24/16.
 */
var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res) {
  app.use('index.html');
});
app.listen(8080);