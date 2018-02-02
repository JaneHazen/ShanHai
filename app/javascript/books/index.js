import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import App from './components/App'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import reducers from './components/reducers';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


const books = document.querySelector('#books')

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
                  <App/>
                </Provider>, books)