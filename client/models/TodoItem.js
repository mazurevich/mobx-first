import { observable } from 'mobx';

export default class TodoItem {
  id;
  @observable title;
  @observable priority = 0;
  @observable done = false;

  constructor({ id, title }) {
    this.id = id;
    this.title = title;
  }
}
