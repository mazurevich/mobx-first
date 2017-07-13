import { autorun } from 'mobx';
import person from '../../stores/person';
import template from './person.hbs';

class PersonView {
  constructor(parent) {
    this.store = person;
    this.parent = parent;
    autorun(() => {
      console.log('autorun in PersonView');
      this.render();
    })
  }

  render() {
    this.parent.innerHTML = template(this.store)
  }
}
export default PersonView;
