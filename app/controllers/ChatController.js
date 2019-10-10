module.exports.iniciaChat = function (app, req, res) {

	let formData = req.body;

	req.assert('nickname', 'Nome obrigatório').notEmpty();
	req.assert('nickname', 'Nome deve conter mais de 3 caracteres e menos de 15 caracteres').len(3,15);

	let errors = req.validationErrors();

	if( errors ) {
		res.render('index', {errors: errors});
		return;
	}

	let io = app.get('io');
	io.emit('signalToClient',
		{
			nickname: formData.nickname,
			msg: 'Connect now'
		});

	res.render('chat');
};