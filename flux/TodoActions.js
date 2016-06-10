var AppDispatcher = require('./AppDispatcher');
var constants = require('./constants');
var ApiClient = require('./ApiClient');


module.exports = {
  addTodo: function(name) {
    ApiClient.add({
      name: name,
      completed: false
    }, function(res) {
      AppDispatcher.dispatch({
        action: constants.ADD_TODO,
        data: res
      });
    });
  },
  removeTodo: function(id) {
    ApiClient.remove(id, function(res) {
      AppDispatcher.dispatch({
        action: constants.REMOVE_TODO,
        data: { id: id }
      });
    });
  },
  completeTodo: function(id) {
    ApiClient.complete(id, function(res) {
      AppDispatcher.dispatch({
        action: constants.COMPLETE_TODO,
        data: { id: id }
      });
    });
  }
};
