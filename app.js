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
  , path: "/rest/entities/39229?detail=full"
  , headers: {'Content-Type': 'application/json'}
  , method: 'GET'
};


var req = http.request(options, function(data){
    console.log('data', data);
});


req.on("error", function(ee){
    console.log(ee);
});

console.log('wtf');

app.listen(3000);


