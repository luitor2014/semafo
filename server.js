
var net = require('net');
//socket.io

//socket.io - fin
var client = new net.Socket();
client.connect(29545, 'localhost', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
});

client.on('close', function() {
	console.log('Connection closed');
});

setInterval(function(){
  //client.write(dt.toString());
  console.log("Escuchando...ConectadoCLientTcp" );
},5000);

console.log("Client TCP...");
