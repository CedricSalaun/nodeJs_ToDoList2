const { Sequelize } = require('sequelize');
const Task = require('../Entity/Task');
const Status = require('../Entity/Status');
const dbConnect = require('../../Controller/Kernel/dbConnection');
const Op = Sequelize.Op;
const app = require('express')();

class TaskService {
        static selectAll(request, response) {
                Task.findAll({limit: 10})
                    .then(Task => {console.log(Task)});
               return Task;
        }

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

    static addOne(request) {
        Task.sync()
            .then(Status.sync())
            .then(Task.belongsTo(Status, {onDelete: 'SET NULL'}))
            .then(() => {
                Task.findOrCreate({
                    where: {
                        title: request.title,
                        resume: request.resume,
                        content: request.content,
                        statusId: request.status,
                    }
                })
            .spread((Task, created) => {
                    console.log(Task.get({plain: true}), created);
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

module.exports = TaskService;


