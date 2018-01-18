import { combineReducers } from 'redux';
import books from './books_reducer';
import comments from './comments_reducer'

const rootReducer = combineReducers({
    books,
    comments
  });

export default rootReducer;