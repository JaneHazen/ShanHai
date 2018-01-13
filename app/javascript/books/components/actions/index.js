import axios from 'axios';

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
