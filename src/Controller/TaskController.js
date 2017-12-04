const { Controller } = require('../Controller/AbstractController');
const TaskController = new Controller('../Model/Repository/TaskRepository');
//const Task = require('../Entity/Task');

module.exports = TaskController.getRouter();

//const TaskController = ('../Model/Repository/TaskRepository');