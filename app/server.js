const express = require('express');
const redirect = require('express-redirect');
const TaskController = require('../src/Controller/TaskController');
const bodyParser = require('body-parser');
const port = 8080;
const app = express();

redirect(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'src/View');

app.use('/task', TaskController)
    .redirect('/', '/task')
    .get('/task', (request, response)=>{
    response.render('task/pages/index', {task:
        {
            title: 'title',
            resume: 'resume',
            status: 'status'
        }
    });
});

app.get('/create', (request, response)=>{
    response.render('task/pages/create');
});

app.use('/create/task', TaskController)
    .redirect('/create/task', '/', 'post');

app.listen(port, ()=>{
    console.log('Listen on port ' + port);
});