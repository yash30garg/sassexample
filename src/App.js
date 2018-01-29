import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './App.css';
import allReducers from'./reducers';

const store = createStore(allReducers);


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <h1 className="App-title">Welcome to My Demo App</h1>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
