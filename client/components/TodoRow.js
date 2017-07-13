import React, { Component } from 'react';

class TodoRow extends Component {
  constructor(props) {
    super(props);
  }

  changePriority(todo, step) {
    todo.priority += step;
  }

  render() {
    return (<tr>
      <td>
        <div className="btn-group pull-right">
          { this.props.todo.done == false ?
            (<button type="button" className="btn btn-success" onClick={() => this.props.todo.done = true}>Done</button>)
            : null
          }
          <button className="btn btn-default" type="button" onClick={() => this.changePriority(this.props.todo, 1)}>
            <span className="glyphicon glyphicon-arrow-up"></span>
          </button>
          <button className="btn btn-default" type="button" onClick={() => this.changePriority(this.props.todo, -1)}>
            <span className="glyphicon glyphicon-arrow-down"></span>
          </button>
        </div>
        <span>{this.props.todo.title} [{this.props.todo.priority}]</span>
      </td>
    </tr>)
  }
}

export default TodoRow;
