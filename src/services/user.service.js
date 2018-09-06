'use strict'

const user = require('../config/db/sequalize')

var userService = {
	findAll : function(){
		return user.findAll();
	},
	save : function (userObj){
		return user.create(userObj)
	}
}

module.exports = userService;