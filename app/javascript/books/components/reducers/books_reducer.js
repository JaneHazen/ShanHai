const state = {
  list:[]
}

export default function(state={}, action){
    switch(action.type){
      case 'SEARCH_BOOKS':
        return {...state, list:action.payload, detail:[]}
      case 'BOOK_DETAIL':
        return {...state, detail:action.payload}
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