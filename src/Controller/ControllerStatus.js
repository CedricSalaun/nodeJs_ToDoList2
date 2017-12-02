const { Controller } = require('../Controller/AbstractController');
const StatusController = new Controller('../Model/Repository/StatusRepository');

module.exports = StatusController.getRouter();
