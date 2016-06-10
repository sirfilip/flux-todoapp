var $ = require('jquery');

module.exports = {
  all: function() {
    return $.ajax({
      url: 'http://localhost:3000/api/v1/todos',
      dataType: 'json',
      method: 'GET',
      contentType: 'application/json',
    });
  },
  add: function(todo) {
    return $.ajax({
      url: 'http://localhost:3000/api/v1/todos',
      method: 'POST',
      dataType: 'json',
      data: JSON.stringify({name: todo.name, completed: todo.completed}),
      contentType: 'application/json',
    });
  },
  complete: function(id) {
    return $.ajax({
      url: 'http://localhost:3000/api/v1/todos/' + id,
      method: 'PUT',
      dataType: 'json',
      data: JSON.stringify({completed: true}),
      contentType: 'application/json',
    });
  },
  remove: function(id) {
    return $.ajax({
      url: 'http://localhost:3000/api/v1/todos/' + id,
      method: 'DELETE',
      dataType: 'json',
      contentType: 'application/json',
    });
  }
};
