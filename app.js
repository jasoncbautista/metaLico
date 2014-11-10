var http = require("http");

var express = require('express');



var sampleModule = require("./sample");


var app = express();

app.get('/', function(req, res){

	  var answer = sampleModule.addFive(5);
      res.send('hello world ' + answer);
});


var options = {
  host: "sqor.com"
  , port: 80 
  //, headers: {'Content-Type': 'application/json'}
  , method: 'GET'
};


http.request(options, function(data){
    console.log('data', data);
});

http.get(options, function(resp){
  resp.on('data', function(chunk){
    //do something with chunk
    console.log(chunk);
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});


console.log('wtf');

app.listen(3000);


