var request = require('request');
request('https://sqor.com/rest/entities/26739?detail=full', function (error, response, body) {
	console.log(response);
	console.log(body);
	console.log(error);
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})