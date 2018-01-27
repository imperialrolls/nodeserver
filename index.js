var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
  response.end("It Works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT1, function() {
  console.log("Server listening on: http://localhost:" + PORT1);  

});

function handleSecondRequest(request, response) {
  response.end("It Works!! Path Hit: " + request.url);
}

var secondServer = http.createServer(handleSecondRequest);

secondServer.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:" + PORT2);

});