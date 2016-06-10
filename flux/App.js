var React = require('react');
var TodoStore = require('./TodoStore');
var Todo = require('./Todo');
var TodoActions = require('./TodoActions');

var App = React.createClass({
  getInitialState: function() {
    return {
      todos: TodoStore.todos
    };
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this.updateTodoList);
  },

  updateTodoList: function() {
    this.setState({
      todos: TodoStore.todos
    });
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this.update);
  },

  addTodo: function(e) {
    e.preventDefault();
    TodoActions.addTodo(e.target.name.value);
    e.target.name.value = '';
  },

  render: function() {
    var todos = this.state.todos.map(function(todo) {
      return <Todo name={todo.name} completed={todo.completed} key={todo.id} id={todo.id} />;
    });
    return (
      <div class="todoApp">
        <h1>Your Todo List</h1>
        <table className="table">
          <tbody>
            {todos}
          </tbody>
        </table>
        <form onSubmit={this.addTodo}>
          <input type="text" name="name" className="form-control"/>
          <button type="submit" className="btn btn-primary form-control">Add</button>
        </form>
      </div>
    );
  }
});


module.exports = App;
