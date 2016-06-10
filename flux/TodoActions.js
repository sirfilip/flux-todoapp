var AppDispatcher = require('./AppDispatcher');
var constants = require('./constants');
var ApiClient = require('./ApiClient');

ApiClient.all().done(function(res) {
  AppDispatcher.dispatch({
    action: constants.TODOS_LOADED,
    data: res
  });
}).fail(function(xhr) {
  alert(xhr.responseText);
});


module.exports = {
  addTodo: function(name) {
    ApiClient.add({
      name: name,
      completed: false
    }).done(function(res) {
      AppDispatcher.dispatch({
        action: constants.ADD_TODO,
        data: res
      });
    }).fail(function(xhr) {
      alert(xhr.responseText);
    });
  },
  removeTodo: function(id) {
    ApiClient.remove(id).done(function(res) {
      AppDispatcher.dispatch({
        action: constants.REMOVE_TODO,
        data: { id: id }
      });
    }).fail(function(xhr) {
      alert(xhr.responseText);
    });
  },
  completeTodo: function(id) {
    ApiClient.complete(id).done(function(res) {
      AppDispatcher.dispatch({
        action: constants.COMPLETE_TODO,
        data: { id: id }
      });
    }).fail(function(xhr) {
      alert(xhr.responseText);
    });
  }
}
