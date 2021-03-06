import _ from 'lodash';

import {GET_BOOKS, GET_BOOK } from '../actions'

export default function(state={}, action){
    switch(action.type){
      case GET_BOOKS:
        return _.mapKeys(action.payload.data, 'id');
      case GET_BOOK:
      return { ...state, [action.payload.data.id]: action.payload.data};
      case 'CLEAR_DETAIL':
        return {...state, detail:action.payload}
      case 'CHECK_IF_READ':
        return {...state, is_it_read:action.payload}
      case 'MARK_AS_READ':
          return {...state, is_it_read:action.payload}
      case 'MARK_AS_UNREAD':
          return {...state, is_it_read:action.payload}
      default:
        return state;
    }
}