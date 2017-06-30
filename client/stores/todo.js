import { observable, autorun } from 'mobx';
import TodoItem from '../models/TodoItem';

class TodoStore {
  @observable todos = [];
  @observable filter = '';
  maxId = 0;

  addTodo(title) {
    this.todos.push(new TodoItem({ id: this.maxId++, title }));
  }
}

const store = new TodoStore();
store.todos.push(new TodoItem({ id: '1', title: 'do something' }));

export default store;

autorun(() => {
  console.log(store.todos);
})
