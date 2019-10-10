module.exports = function (app) {
	app.get('/', function (req, res) {
		console.log('GET /index');
		app.app.controllers.IndexController.index(app, req, res)
	})
};