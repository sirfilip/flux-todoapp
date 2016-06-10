var router = require('express').Router();
var _ = require('lodash');
var todos = [];

function idGenerator() {
  var id = 0;
  return function() {
    return ++id;
  }
}

var generateTodoId = idGenerator();

router.get('/', function(req, res) {
  res.json(todos);
});

router.post('/', function(req, res) {
  var todo = {
    name: req.body.name,
    completed: req.body.completed,
    id: generateTodoId()
  };
  todos.push(todo);
  res.json(todo);
});

router.put('/:id', function(req, res) {
  var todo = _.find(todos, function(todo) {
    return todo.id.toString() === req.params.id;
  });
  todo.completed = req.body.completed;
  res.json(todo);
});

router.delete('/:id', function(req, res) {
  todos =  _.reject(todos, function(todo) {
    return todo.id.toString() === req.params.id;
  });
  res.json(todos);
});

module.exports = router;
