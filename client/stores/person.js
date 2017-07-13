import { observable, computed } from 'mobx';

class Person {
  @observable firstName = '';
  @observable secondName = '';
  @observable age = 0;

  constructor() {
  }

  @computed get fullName() {
    return `${this.firstName} ${this.secondName}`;
  }
}

export default new Person();
