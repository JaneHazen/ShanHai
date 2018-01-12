import axios from 'axios';
export function getBooks(keyword){
  const request = axios.get('/api/books', {
    })
    .then(function(response){
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

