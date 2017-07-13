import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodoRow from './TodoRow';
import { autorun } from 'mobx';

@observer
class TodoList extends Component {
  constructor() {
    super();
  }



  render() {
    const rows = this.props.store.priorytized.map(
      todo => (<TodoRow key={todo.id}
                        todo={todo}
                       />)
    );
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>Goal:</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>

    )
  }
}


export default TodoList;
