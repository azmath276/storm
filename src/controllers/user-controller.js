'use strict';

exports.getAllUsers = function(requets, reponse){
	console.log("Get all the users.");
	reponse.json(["Tony","Lisa"]);
};