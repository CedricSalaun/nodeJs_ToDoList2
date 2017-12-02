const express = require('express');

class AbstractController {
    constructor(Service) {
        this.router = express.Router();
        this.service = require(Service);
/*
        this.router.get('/', (request, response) => {
            this.service.selectAll((data) => {
                response.json(data);
            });
        });
*/
/*
        this.router.get('/:id', (request, response) => {
            this.service.selectOn(request.param.id, (data) => {
                response.json(data);
            });
        });
*/
        this.router.post('/', (request, response) => {
            let data = request.body;
            this.service.addOne(data, (callback) => {
                data.id = callback.insertId;
                response.json(data);
            });
        });

/*
        this.router.post('/', (request, response) => {
            let data = request.body;
            this.service.updateOne(data, () => {
                response.json(data);
            });
        });
*/
/*
        this.router.delete(':/id', (request, response) => {
            this.service.deleteOne(request.body.id, () => {
                response.send({});
            });
        });
*/
    }
    getService() {
        return this.service;
    }
    getRouter() {
        return this.router;
    }
}

module.exports.Controller = AbstractController;