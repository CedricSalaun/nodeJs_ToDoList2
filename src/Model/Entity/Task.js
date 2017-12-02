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
    }
},
    {
        timestamps: false,
        underscored: true
    });

module.exports = Task;