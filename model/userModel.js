const {Sequelize,DataTypes} = require('sequelize');

const dbConnection = require('../util/dbConnection');

const user = dbConnection.define('user',{
    id :{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull : false,
        primaryKey : true
    },
    name :{
        type:DataTypes.STRING,
        allowNull:false
    },
    email :{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
})

module.exports = user