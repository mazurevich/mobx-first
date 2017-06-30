import React, { Component } from 'react';
import TodoList from '../containers/TodoList';
import todoStore from '../stores/todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = { newTitle: '' };
  }

  onFormSubmit(e) {
    e.preventDefault();
    todoStore.addTodo(this.state.newTitle);
  }

  onInputChange(e) {
    this.setState({ newTitle: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="title" value={this.state.newTitle} onChange={this.onInputChange}/>
        </form>
        <TodoList store={todoStore}/>
      </div>
    );
  }
}

export default App;
