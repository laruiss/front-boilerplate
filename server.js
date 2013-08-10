var express = require('express'),
	app = express(),
	server = require('http').createServer(app);

server.listen(8007);

app.use("/", express.static(__dirname + '/public'));

