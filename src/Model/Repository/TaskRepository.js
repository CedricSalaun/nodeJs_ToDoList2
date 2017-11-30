const { Sequelize } = require('sequelize');
const Task = require('../Entity/Task');
const dbConnect = require('../../Controller/Kernel/dbConnection');
const Op = Sequelize.Op;


class TaskService{
    static selectAll(callback){
        Task.sync({force:true}).then(()=>{
            Task.findAll({limit:10}).then(Task => {
                console.log(Task + callback);
            });
        });
    }
    static selectOn(idTask, callback){
        Task.sync().then(()=>{
            Task.findAll({where:{
                id: idTask
            }}).then(Task =>{
                console.log(Task + callback);
        });
        });
    }
    static addOne(callback){}
    static updateOne(idTask, callback){
        Task.update({},{where:{
            id: idTask
        }});
    }
    static deleteOne(idTask, callback){
        Task.destroy({
            where: {
               id: idTask
            }
        });
    }
}

module.exports = TaskService;

/*
Task.sync({force: true}).then(() => {
    Task.create({
        title: 'Dishes',
        resume: 'John',
        status: 'en cours',
        body: 'Hancock',
        created_at: new Date()
    });
});*/
