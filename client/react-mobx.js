import 'bootstrap/dist/css/bootstrap.css'
import ReactDom from 'react-dom';
import React from 'react';
import App from './components/app/App';
import store from './stores/todoStore';
import { autorun } from 'mobx';
// import map from 'lodash/fp/map';
//
// const array = [1, 2, 3, 4, 5];
// console.log(map(x => [x, x * 2])(array));

autorun(() => {
  console.log(JSON.stringify(store.priorytized));
});

ReactDom.render(<App/>, document.getElementById('app'));
