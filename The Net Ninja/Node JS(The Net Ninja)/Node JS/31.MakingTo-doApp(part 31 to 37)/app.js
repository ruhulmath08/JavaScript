var express = require('express');

var todoController = require('./controllers/todoController');

var app = express();


//set up template engin
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//file todoController
todoController(app);

//listen to port
app.listen(3000);
console.log('You are listning port : 3000');
