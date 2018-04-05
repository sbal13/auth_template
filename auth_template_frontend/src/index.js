import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import userReducer from './userReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const store = createStore(userReducer, applyMiddleware(thunk))

ReactDOM.render((
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
), document.getElementById('root'));
