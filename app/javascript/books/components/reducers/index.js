import { combineReducers } from 'redux';
import books from './books_reducer';

const rootReducer = combineReducers({
    books
});

export default rootReducer;