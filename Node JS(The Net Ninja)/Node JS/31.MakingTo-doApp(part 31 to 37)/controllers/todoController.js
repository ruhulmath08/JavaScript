/*
Consider modules to be the same as JavaScript libraries.
A set of functions you want to include in your application
*/

var bodyParser = require('body-parser');
var mongoose = require("mongoose");

//Connect with MongoDB
/*
If you are using version >= 3.1.0 change you mongo connection file to ->

MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true })
*/
mongoose.connect('mongodb://test:test1234@ds249707.mlab.com:49707/todo', { useNewUrlParser: true });

//Create a schema -> this is like a blueprint how to save our data in database
var todoSchema = new mongoose.Schema({
    item: String
});

//Create a modle
var Todo = mongoose.model('Todo', todoSchema);

//dummy data for test MongeDB tadabase test
/*
var itemOne = Todo({item: 'Learn Core Java'}).save(function(err){
    if(err){
        throw err;
    }
    console.log('Item save successfully...');
    
});
*/

//dummy data
//var  data = [{item: 'Learning Java'}, {item: 'learning Android Development'}, {item: 'learning JavaScript'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

    app.get('/todo', function(req, res){
        //get date from mongoDB and pass it to view
        Todo.find({}, function(err, data){
            if(err){
                throw err;
            }
            res.render('todo', {todos: data});
        });
    });

    app.post('/todo', urlencodedParser, function(req, res){
        //get date from the view and pass it to mongoDB
        var newTodo = Todo(req.body).save(function(err, data){
            if(err){
                throw err;
            }
            res.json(data);
        });        
    });

    app.delete('/todo/:item', function(req, res){
        //delete the requested item from mongoDB
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
            if(err){
                throw err;
            }
            res.json(data);
        });
    });
};