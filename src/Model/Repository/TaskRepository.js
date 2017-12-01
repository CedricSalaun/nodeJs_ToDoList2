const {Sequelize} = require('sequelize');
const Task = require('../Entity/Task');
const dbConnect = require('../../Controller/Kernel/dbConnection');
const Op = Sequelize.Op;

class TaskService {
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
        console.log(request, callback);
/*
        Task.sync().then(()=>{
            Task.findOrCreate({where:{
                title:request.title,
                resume:request.resume,
                content:request.content
            }}).spread((Task, created)=>{
                console.log(Task.get({plain: true}))
                    .then(Task =>{console.log(created, Task, callback)})
            });
        });
*/
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

module.exports = TaskService;
