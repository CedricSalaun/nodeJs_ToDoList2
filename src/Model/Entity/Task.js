const Sequelize = require('sequelize');
const connect = require('../../Controller/Kernel/dbConnection');
const Task = connect.define('task', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    resume: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.STRING,
        allowNull: true
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
        isDate: true
    }
});

module.exports = Task;