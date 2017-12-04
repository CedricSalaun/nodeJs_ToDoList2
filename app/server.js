const express = require('express');
const redirect = require('express-redirect');

const TaskController = require('../src/Controller/TaskController');
//const { Controller } = require('../src/Controller/AbstractController');
//const StatusController = require('../src/Controller/ControllerStatus');
// const UserModel = require('./src/Model/User');
// const TaskModel = require('../src/Model/Repository/TaskRepository');
//const Controller = require('../src/Controller/AbstractController');

const bodyParser = require('body-parser');

const port = 8080;
const app = express();

redirect(app);


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'src/View');


app.use('/', TaskController).get('/', (request, response) => {
    response.render('task/pages/index', {task: {
        title: 'title',
        resume: 'resume',
        status: 'status'
    }});
});

app.use('/create/task', TaskController);
app.redirect('/create/task', '/', 'post');

// app.use('/user', new Controller(UserModel));
//app.use('/create/task', (new Controller(TaskController).getRouter()));
//app.use('/status', StatusController);
//app.use('/task', task);


//app.redirect('/create/task', '/', 'get');

//app.get('/', (request, response)=>{
//let data = response.query;
//response.render('task/pages/index');
//console.log(TaskController.apiGET)
//});

app.get('/create', (request, response) => {
    response.render('task/pages/create')
});


// app.get('/show', (request, response)=>{
//     response.render('task/pages/show')
// });

// app.get('/login', (request, response)=>{
//     response.render('user/pages/login');
// });

// app.get('/user/create', (request, response)=>{
//     response.render('user/pages/create')
// });

app.listen(port, () => {
    console.log('Listen on port ' + port);
});
