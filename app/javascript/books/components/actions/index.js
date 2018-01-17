import axios from 'axios';


export function handleLogin(username, password){
  const request = axios.post('/users/sign_in', {
        user: {
          username: username,
          password: password
        }
      })
      .then(function(response){
        console.log("RESPONSE!",response)
        that.props.updateCurrentUser(response.id);
      })
      .catch(function(error) {
        that.updateLoginError();
        console.log(error);
      });

  return {
    type: 'LOGIN_USER',
    payload:request
  }
}

export function getBooks(keyword){
  const request = axios.get('/api/books/country', {
      params: {
        country: keyword
      }
    })
    .then(function(response){
      return response.data
    })
    .catch(function(error){
      console.log(error)
    });

    console.log("KEYWORD IN  ACTION:", keyword)
  return {
    type: 'SEARCH_BOOKS',
    payload:request
  }
}

export function checkIfRead(book_id, user_id){
  const request = axios.get('/unreadbooks',{
    params: {
      book_id: book_id,
      user_id: user_id
    }
  })
  .then(function(response){
    console.log("READ DATA" , response)
      return response.data.read
    })
    .catch(function(error){
      console.log("ERRRRRRORa")
      console.log(error)
    });

  return {
    type: 'CHECK_IF_READ',
    payload:request
  }
}


export function bookDetail(id){
  const request = axios.get('/api/books/book_id', {
      params: {
        id: id
      }
    })
    .then(function(response){
      return response.data
    })
    .catch(function(error){
      console.log(error)
    });

  return {
    type: 'BOOK_DETAIL',
    payload: request
  }
}

export function clearDetail(id){
  return {
    type:'CLEAR_DETAIL',
    payload: []
  }
}
