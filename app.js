var express = require('express');

var sampleModule = require("./sample");


var app = express();

app.get('/', function(req, res){

	  var answer = sampleModule.addFive(5);
      res.send('hello world ' + answer);
});

app.listen(3000);
