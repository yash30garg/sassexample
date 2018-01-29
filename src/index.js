import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig';
import allReducers from'./reducers';

const store = createStore(allReducers);

runWithAdal(authContext, () => {

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('root'));

});

