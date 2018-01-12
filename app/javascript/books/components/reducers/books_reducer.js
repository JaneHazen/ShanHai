

export default function(state={}, action){
    switch(action.type){
      case 'SEARCH_BOOKS':
        return {...state, list:action.payload, detail:[]}
      default:
        return state;
    }
}