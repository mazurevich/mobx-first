import { observable } from 'mobx';
export default class TodoItem {
  id;
  @observable title;

  constructor({ id, title }) {
    this.id = id;
    this.title = title;
  }
}

console.log(TodoItem);
