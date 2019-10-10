let app = require('./config/server');

let server = app.listen(80, function () {
	console.log('Server started');
});

let io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function (socket) {
	console.log('New web-socket connected');

	socket.send('xablau');

	socket.on('disconnect', function () {
		console.log('One web-socket was disconnected.')
	})

	socket.on('sendMsgToServer', function (data) {
		socket.emit('signalToClient', {
			nickname: data.nickname,
			msg: data.msg
		});
		socket.broadcast.emit('signalToClient', {
			nickname: data.nickname,
			msg: data.msg
		});
	})
});