var http = require("http");

var express = require('express');



var sampleModule = require("./sample");


var app = express();

app.get('/', function(req, res){

	  var answer = sampleModule.addFive(5);
      res.send('hello world ' + answer);
});



// Hitting real rest
var options = {
  host: "sqor.com"
  , port: 80 
  , headers: {'Content-Type': 'application/json'}
  , method: 'GET'
};


http.request(options, function(data){
    console.log('data', data);
});

console.log('wtf');

app.listen(3000);


