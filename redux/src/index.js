
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Store';
import Counter from './Counter'; 

ReactDOM.render(
  <Provider store={Store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
