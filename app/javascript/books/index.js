import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import App from './components/App'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import reducers from './components/reducers';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);


const books = document.querySelector('#books')

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
                  <App/>
                </Provider>, books)