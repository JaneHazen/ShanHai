import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBooks } from './actions';

import axios from 'axios';
import Timestamp from 'react-timestamp';
// components
import NewBookForm from './NewBookForm'


class Popup extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user_id: null
    }
  }

  componentDidMount(){
    const countryName = this.props.country.props.children.countryName
    this.props.getBooks( countryName );
    let that = this
    axios.get('/pages/are_we_there_yet',{
    })
    .then(function(response){
      if(response.data.email){
        that.setState({
          user_id: response.data.id
        })
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }


  renderBooks(){
    console.log(this.props)
      return _.map(this.props.books, book => {
          return(
            <Link to={`/books/${book.id}`} key={book.id} className="link">
              <li className="jumbotron">
                <article className="popupContainer" key={book.id}>
                    <p className="bookTitle">{book.title}</p>
                    <p className="bookAuthor">{book.author}</p>
                    <p className="bookDescription">{book.description}</p>
                    <p className="bookCreatedAt"><Timestamp time={book.created_at} format='full'/></p>
                </article>
              </li>
            </Link>
            );
      });
  }

  renderNewBookForm(){
    const countryName = this.props.country.props.children.countryName
    if (this.props.currentUser !== null){
      return (
          <div>
            <NewBookForm
            currentUser = {this.props.currentUser}
            country={this.props.country.props.children.countryName}
            getBooks = {this.props.getBooks}
            />
          </div>
          )
    }
  }



  render() {
    return (
      <div className='popup'>
        <div className='popupInner' >
          <button className="close" aria-label="Close" onClick={this.props.closePopup}><span aria-hidden="true">&times;</span></button>
            <div className="container-fluid">
              <h2 className="countryName">{this.props.country.props.children.countryName}</h2>
            </div>
            {this.renderNewBookForm()}
            <ul className="booksUl">
              {this.renderBooks()}
            </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { books: state.books }
}

export default connect(mapStateToProps, { getBooks })(Popup);