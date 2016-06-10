var _ = require('lodash');
var assign = require('object-assign');
var Emitter = require('events').EventEmitter;
var AppDispatcher = require('./AppDispatcher');
var constants = require('./constants');
var ApiClient = require('./ApiClient');

var CHANGE = 'change';

var TodoStore = assign({}, Emitter.prototype, {
  todos: [],
  load: function() {
    ApiClient.all(function(res) {
      this.todos = res;
      this.emit(CHANGE);
    }.bind(this));
  },
  add: function(todo) {
    this.todos = _.concat(this.todos, todo);
    this.emit(CHANGE);
  },
  complete: function(id) {
    this.todos = _.map(this.todos, function(todo) {
      if (todo.id === id) {
        todo.completed = true;
      }
      return todo;
    });
    this.emit(CHANGE);
  },
  remove: function(id) {
    this.todos = _.reject(this.todos, function(todo) {
      return todo.id === id;
    });
    this.emit(CHANGE);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE, callback);
  }
});


AppDispatcher.register(function(payload) {
  switch(payload.action) {
    case constants.TODOS_LOADED:
      TodoStore.load(payload.data);
      break;
    case constants.ADD_TODO:
      TodoStore.add(payload.data);
      break;
    case constants.COMPLETE_TODO:
      TodoStore.complete(payload.data.id);
      break;
    case constants.REMOVE_TODO:
      TodoStore.remove(payload.data.id);
      break;
    default:
      break;
  }

  return true;
});

TodoStore.load();
module.exports = TodoStore;
