const {Sequelize} = require('sequelize');
const Status = require('../Entity/Status');
const dbConnect = require('../../Controller/Kernel/dbConnection');
const Op = Sequelize.Op;

class StatusService {
/*
    static selectAll(callback) {
        Task.sync({force: true}).then(() => {
            Task.findAll({limit: 10}).then(Task => {
                console.log(Task + callback);
            });
        });
    }
*/
/*
    static selectOn(idTask, callback) {
        Task.sync().then(() => {
            Task.findAll({
                where: {id: idTask}
            }).then(Task => {
                console.log(Task + callback);
            });
        });
    }
*/
    static addOne(request, callback) {
        Task.sync().then(()=>{
            Task.findOrCreate({where:{
                title:request.title,
                resume:request.resume,
                content:request.content
            }}).spread((Task, created)=>{
                console.log(Task.get({plain: true}), created)
            });
        });
    }
/*
    static updateOne(idTask, callback) {
        Task.update({}, {
            where: {
                id: idTask
            }
        }).then(Task => {
            console.log(Task + callback);
        });
    }
*/
/*
    static deleteOne(idTask, callback) {
        Task.destroy({
            where: {
                id: idTask
            }
        }).then(Task => {
            console.log(Task + callback);
        });
    }
*/
}

module.exports = StatusService;
