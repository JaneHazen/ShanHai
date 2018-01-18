export default function(state={}, action){
    switch(action.type){
      case 'GET_COMMENTS':
      console.log(action.payload)
        return {...state, comments:action.payload}
      case 'CLEAR_COMMENTS':
        return {...state, comments:action.payload}
      default:
        return state;
    }
}