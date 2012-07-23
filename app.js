var sys = require( "util" );
var http = require( "http" );

// Create our HTTP server.
var server = http.createServer(
function( request, response ){


// Create a SUPER SIMPLE response.
response.writeHead( 200, {"content-type": "text/plain"} );
response.write( "Hello world from AWS UNBUNTU!!!!!!" + Date.now() + "\nDeployed From GitHub !!!! For Real !!!" );
response.end();

}
);

// Point the HTTP server to port 8080.
server.listen( 8080 );

// For logging....
sys.puts( "Server is running on 8080" );
