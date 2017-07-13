import template from './todo.hbs';
import todoStore from '../../stores/todoStore';
import { autorun } from 'mobx';

class TodoView {
  constructor(parent) {
    this.store = todoStore;
    this.parent = parent;
    autorun(this.render.bind(this));
  }

  render() {
    this.parent.innerHTML = template({ todos: this.store.todos.peek() });
  }
}

export default TodoView;
