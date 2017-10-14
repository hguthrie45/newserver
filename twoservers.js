var http = require("http");

var Port1 = 7000

var Port2 = 7500

function handle1(request, response){
	response.end(" ok " + request.url);
}; 

var server = http.createServer(handle1); 

server.listen(Port1,  function(){
	console.log("pretty good on: http://localhost:" + Port1);

});



function handle(request, response){
	response.end(" sucks " + request.url);
}

var server2 = http.createServer(handle); 

server2.listen(Port2, function(){
	console.log( " nope " );

});