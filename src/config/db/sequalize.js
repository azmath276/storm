'use strict'

//sequalize from the packages
const Sequelize = require('sequelize')

//User defined models
const USER_INIT = require("../../models/user");

const sequelize = new Sequelize('test-dev', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

const User = USER_INIT(sequelize, Sequelize)

module.exports = User