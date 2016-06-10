var React = require('react');
var TodoActions = require('./TodoActions');


var Todo = React.createClass({
  render: function() {
    var style = {};
    var buttons = [];

    if (this.props.completed === true) {
      style.textDecoration = 'line-through';
    } else {
      buttons.push(<button onClick={this.finish} className="btn btn-xs btn-success">Finish</button>);
      buttons.push(<span> </span>);
    }

    buttons.push(<button onClick={this.remove} className="btn btn-xs btn-danger">Remove</button>);

    return (
      <tr className="TodoItem">
        <td>
          <span style={style}>{this.props.name}</span>
        </td>
        <td className="text-right">
          {buttons}
        </td>
      </tr>
    );
  },

  finish: function(e) {
    e.preventDefault();
    TodoActions.completeTodo(this.props.id);
  },

  remove: function(e) {
    e.preventDefault();
    TodoActions.removeTodo(this.props.id);
  }
});

module.exports = Todo;
