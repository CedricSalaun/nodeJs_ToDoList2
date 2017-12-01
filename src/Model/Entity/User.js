const Sequelize = require('sequelize');
const connect = require('./app/conf/dbConnection');
const User = connect.define('user', {
    username: {
        type: Sequelize.STRING
    },
    birthday: {
        type: Sequelize.DATE
    }
});

module.exports = User;