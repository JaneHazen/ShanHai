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
      default:
        return state;
    }
}