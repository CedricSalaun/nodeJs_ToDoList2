const Sequelize = require('sequelize');
const connect = require('../../Controller/Kernel/dbConnection');
const Status = connect.define('status', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    underscored: false
});

module.exports = Status;