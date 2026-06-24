var express = require('express');

// create a new express server
var app = express();

var port=process.env.PORT || 8000;

// serve the files out of ./public1 as our main files
app.use(express.static(__dirname + '/public1'));

app.listen(port,function() {
  // print a message when the server starts listening
  console.log("server starting on " + port);
});