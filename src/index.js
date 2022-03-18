import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/reducers/rootReducer'; 
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import './scss/app.scss'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={ store }>
      <App/>
    </Provider>,
  document.getElementById('root')
);
