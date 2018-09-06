'use export';

module.exports = function(app) {
	//let user = require("../controllers/user-controller");
	let userController = require("../controllers/user.controller");
	app.route('/users').get(userController.getAll);
	app.route('/users').post(userController.save);
}