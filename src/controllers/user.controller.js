'use strict'

const userService = require('../services/user.service')

var userController = {
	getAll : function(request, reponse, next){
		userService.findAll().then(users => reponse.json(users))
	},
	save : function(request, response, next){
  		userService.save(request.body).then(user => response.json(user))
	},
	update: function(request, response, next){

	},
	delete : function(request, response, next) {

	}
}

module.exports = userController;