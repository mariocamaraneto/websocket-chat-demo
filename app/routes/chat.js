module.exports = function (app) {
	app.post('/chat', function (req, res) {
			console.log('POST /chat');
			app.app.controllers.ChatController.iniciaChat(app, req, res);
	});

	app.get('/chat', function (req, res) {
			console.log('GET /chat');
		 app.app.controllers.ChatController.iniciaChat(app, req, res);
	})

};