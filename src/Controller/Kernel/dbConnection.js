const Sequelize = require('sequelize');
const db = require('../../../app/conf/dbConfig');

const connect = new Sequelize(db.dbDev.database, db.dbDev.user, db.dbDev.password, {
    host: db.dbDev.host,
    port: db.dbDev.port,
    dialect: db.dbDev.dialect,
    pool: db.dbDev.pool
});

module.exports = connect;