import todoStore from 'stores/todoStore';
import TodoItem from 'models/TodoItem';
import TodoView from 'views/todo/TodoView';
import person from 'stores/person';
import PersonView from 'views/person/PersonView';
import { action } from 'mobx'

window.store = todoStore;
window.TodoItem = TodoItem;

const parent = document.getElementById('app');
const view = new TodoView(parent);

const personParent = document.getElementById('person');
const personView = new PersonView(personParent);
action(() => {
  person.firstName = 'John';
  person.secondName = 'Doe';
})();

setTimeout(() => {
  person.firstName = 'Peter';
},1000)


todoStore.addTodo('do something else');
