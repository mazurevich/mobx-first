import { observable, autorun, computed } from 'mobx';
import TodoItem from '../models/TodoItem';

class TodoStore {
  @observable todos = [];
  @observable filter = '';
  maxId = 0;

  @observable someArray = [1,2,3];

  constructor() {
    // this.someArray = [];
  }

  addTodo(title) {
    this.todos.push(new TodoItem({ id: this.maxId++, title }));

  }

  @computed get priorytized() {
    return this.todos.sort((first, second) => {
      if (first.priority > second.priority)
        return -1;
      if (first.priority < second.priority)
        return 1;
      return 0;
    })
  }
}

const store = new TodoStore();

export default store;

autorun(() => {
  console.log(store.todos.peek().map(todo => todo.title).join(', '));
});
