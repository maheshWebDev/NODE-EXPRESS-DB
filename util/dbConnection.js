const {Sequelize} = require('sequelize');

const dbConnection = new Sequelize('node-express-db-practice','root','root123',{
    dialect:'mysql',
    host : 'localhost'
})

module.exports = dbConnection;