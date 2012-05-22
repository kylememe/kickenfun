//Load the necessary servers
var sys = require("util");
var http = require("http");

//Create out HTTP server.
var server = http.createServer(
        function(request, response){

        //Create SUPER SIMPLE response
        response.writeHead(200, {"content-type": "text/plain"});
        response.write("Hello world from AWS! Edited from VI! Logged out!! Edited! " + new Date().getTime());
        response.end();
        });

server.listen(8080);

sys.puts("Server is running on 8080");
