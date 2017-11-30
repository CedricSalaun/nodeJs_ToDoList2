const { Controller } = require('../Controller/AbstractController');
const TaskController = new Controller('../Model/Repository/TaskRepository');

module.exports = TaskController;