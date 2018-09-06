module.exports = (sequelize, DataTypes) => {
	
  return sequelize.define("user", {
  	id: {
		field: 'id',
		type : DataTypes.BIGINT,
		primaryKey: true,
    	autoIncrement: true
	},
	firstName: {
		field: 'first_name',
		type: DataTypes.STRING
	},
  	lastName: {
  		field: 'last_name',
    	type: DataTypes.STRING
  	}
  }, {
	timestamps: false,
	freezeTableName: true,
  	tableName: 't_user',
  	verion : true
  })
}