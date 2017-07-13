// import 'bootstrap/dist/css/bootstrap-theme.css'
import './App.scss';
import React, { Component } from 'react';
import TodoList from '../TodoList';
import todoStore from '../../stores/todoStore';
import TodoInput from '../todo-input/TodoInput';

window.store = todoStore;

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

      <div className="container">
        <div className="jumbotron">
          <h3>Amasing to-do app</h3>
          <p>Easy to add, easy to order</p>
        </div>

        <TodoInput/>
        <TodoList store={todoStore}/>
      </div>
    );
  }
}

export default App;
