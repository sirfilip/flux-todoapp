var superagent = require('superagent');

module.exports = {
  all: function(callback) {
    return superagent
      .get('http://localhost:3000/api/v1/todos')
      .type('json')
      .accept('json')
      .end(function(err, res) {
        if (err) {
          console.error(err);
        } else {
          callback(res.body);
        }
      });
  },
  add: function(todo, callback) {
    return superagent
      .post('http://localhost:3000/api/v1/todos')
      .type('json')
      .accept('json')
      .send({name: todo.name, completed: todo.completed})
      .end(function(err, res) {
        if (err) {
          console.error(err);
        } else {
          callback(res.body);
        }
      });
  },
  complete: function(id, callback) {
    return superagent
      .put('http://localhost:3000/api/v1/todos/' + id)
      .type('json')
      .accept('json')
      .send({completed: true})
      .end(function(err, res) {
        if (err) {
          console.error(err);
        } else {
          callback(res.body);
        }
      });
  },
  remove: function(id, callback) {
    return superagent
      .delete('http://localhost:3000/api/v1/todos/' + id)
      .type('json')
      .accept('json')
      .send({completed: true})
      .end(function(err, res) {
        if (err) {
          console.error(err);
        } else {
          callback(res.body);
        }
      });
  }
};
