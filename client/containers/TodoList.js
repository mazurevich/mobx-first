import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TodoList extends Component {
  render() {
    const itemsJsx = this.props.store.todos.map(item => (<li key={item.id}>{item.title}</li>));
    return (
      <ul>
        {itemsJsx}
      </ul>
    )
  }
}

export default TodoList;
