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

export function getComments(book_id){
  const request = axios.get('/booklists', {
    params: {
      book_id: book_id
    }
  })
  .then(function(response){
    console.log("THIS IS THE RESPONSE", response)
    return response.data
  })
  .catch(function(error){
    console.log(error)
  });

  return{
    type: 'GET_COMMENTS',
    payload: request
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
    console.log("READ DATA" , response.data)
      return response.data
    })
    .catch(function(error){
      console.log(error)
    });

  return {
    type: 'CHECK_IF_READ',
    payload:request
  }
}

export function markAsRead(book_id, user_id){
  console.log("mark as unread ACTION")
  const request = axios.post("/unreadbooks", {
    params: {
      book_id: book_id,
      user_id: user_id
    }
  })
  .then(function(response){
    console.log("POSTED")
    return response.data
  })
  .catch(function(error){
    console.log(error)
  })

  return{
    type: 'MARK_AS_READ',
    payload: request
  }
}

export function markAsUnread(book_id, user_id){
  console.log("MARK AS UNREAD IN HERE")
  const request = axios.delete(`/unreadbooks/${book_id}`, {
    params: {
      book_id: book_id,
      user_id: user_id
    }
  })
  .then(function(response){
    console.log("Deleted")
    {this.checkIfRead(book_id, user_id)}
  })
  .catch(function(error){
    console.log(error)
  })

  return{
    type: 'MARK_AS_UNREAD',
    payload: request
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

export function clearComments(){
  return {
    type:'CLEAR_COMMENTS',
    payload: []
  }
}