const {Sequelize,DataTypes} = require('sequelize');

const dbConnection = require('../util/dbConnection');

const product = dbConnection.define('product',{
    id : {
        type : DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title : {
        type : DataTypes.STRING,
        allowNull:false
    },
    price : {
        type : DataTypes.DOUBLE,
        allowNull:false
    },
    imgURL : {
        type:DataTypes.STRING,
        allowNull:false
    }
})
module.exports = product;