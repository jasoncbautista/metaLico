var http = require("http");

var express = require('express');



var sampleModule = require("./sample");


var app = express();

app.get('/', function(req, res){

	  var answer = sampleModule.addFive(5);
      res.send('hello world ' + answer);
});


var options = {
  host: "https://rest.sqor.com",
  port: 80,
  path: '/rest/entities/26739?detail=full',
  method: 'GET'
};

http.request(options, function(res) {
	debugger;
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}, function(eee){ console.log(eee);}).end();

console.log('wtf');

app.listen(3000);


