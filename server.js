var express = require('express'),
	app = express(),
	open = require('open'),
	server = require('http').createServer(app),
	port = 8088;

server.listen(port);

app.use("/", express.static(__dirname + '/public'));

open('http://localhost:' + port);
