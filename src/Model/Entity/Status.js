const Sequelize = require('sequelize');
const connect = require('../../Controller/Kernel/dbConnection');
const Status = connect.define('status', {
    labelle: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Task;