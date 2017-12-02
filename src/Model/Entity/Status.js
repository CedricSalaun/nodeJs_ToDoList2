const Sequelize = require('sequelize');
const connect = require('../../Controller/Kernel/dbConnection');
const Status = connect.define('status', {
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        uuid: {
            type: Sequelize.UUID,
            primaryKey: true,
            //defaultValue: Sequelize.UUIDV1
        },
    },
    {
        timestamps: false
    });

module.exports = Status;