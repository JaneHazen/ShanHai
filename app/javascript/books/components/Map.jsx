import React from 'react';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

class Map extends React.Component {
  constructor (){
    super();
    this.state={
      book: {}
    };
  }

  fetchBook (id) {
    axios.get(`api/books/${id}`)
    .then(response =>{
      this.setState({book: response.data});
    })
    .catch(error => {
      console.error(error);
    });
  }

  setBookIdFromQueryString (qs) {
    this.qsParams = queryString.parse(qs);
    if(this.qsParams.book) {
      this.bookId = Number(this.qsParams.book.id);
    } else {
      this.bookId = 1;
      this.props.history.push(`/?book=${this.bookId}`);
    }
  }

  componentDidMount(){
    this.setBookIdFromQueryString(this.props.location.search);
    this.fetchBook(this.bookId);
  }

  componentWillReceiveProps(nextProps){
    this.setBookIdFromQueryString(nextProps.location.search);
    this.fetchBook(this.bookId);
  }

  render(){
    const nextBookId = Number(this.state.book.id) + 1;
    return(
      <div>
        <Link to={`/?book=${nextBookId}`}>Next</Link>
        <p>{this.state.book.title}</p>
        <p>{this.state.book.author}</p>
      </div>
      );
  }

}

export default Map