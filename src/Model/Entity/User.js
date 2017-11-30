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

connect.sync({force: true}).then(() => {
    User.create({
        username: 'JhonDoe',
        birthday: new Date(1986, 3, 7)
    }).then(John => {
        console.log(John.toJSON());
    });
});

module.exports = User;