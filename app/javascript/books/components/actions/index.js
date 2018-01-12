import axios from 'axios';

export function getBooks(keyword){
  const request = axios.get('/api/books', {
    })
    .then(function(response){
      console.log(response.data)
      response.data
    })
    .catch(function(error){
      console.log(error)
    });

  return {
    type: 'SEARCH_BOOKS',
    payload:request
  }
}


export function bookDetail(id){
  const request = axios.get('/api/books', {
    })
    .then(function(response){
      console.log(response.data)
      response.data
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
