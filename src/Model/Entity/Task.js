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
    content: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
        isDate: true
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
        isDate: true
    }
});

module.exports = Task;