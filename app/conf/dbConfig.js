const db = {
    dbDev:{
        host: 'localhost',
        operatorsAliases: true,
        port: 3306,
        user: 'root',
        password: '',
        database: 'todolist_db',
        dialect :'mysql',
        pool:{
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    dbProd:{
        host: 'localhost',
        operatorsAliases: false,
        port: 3306,
        user:'user',
        password:'secret',
        database:'todolist_db',
        dialect:'mysql',
        pool:{
            max:5,
            min:0,
            acquire:50000,
            idle: 10000
        },
        storage: 'database.sqlite'
    }
};

module.exports = db;