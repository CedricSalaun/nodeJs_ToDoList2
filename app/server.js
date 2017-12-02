const express = require('express');
const bodyParser = require('body-parser');
const TaskController = require('../src/Controller/ControllerTask');
//const StatusController = require('../src/Controller/ControllerStatus');

const port = 8080;
const app = express();

// const UserModel = require('./src/Model/User');
// const TaskModel = require('../src/Model/Repository/TaskRepository');
//const Controller = require('../src/Controller/AbstractController');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use('/user', new Controller(UserModel));
app.use('/task', TaskController);
//app.use('/status', StatusController);

app.set('view engine', 'ejs');
app.set('views', 'src/View');

// app.use('/task', task);

app.get('/', (request, response)=>{
    response.render('task/pages/index');
});

app.get('/create', (request, response)=>{
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

app.listen(port, ()=>{
    console.log('Listen on port ' + port);
});
