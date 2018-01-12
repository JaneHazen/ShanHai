import React, {Component} from 'react';
import axios from 'axios';
import Timestamp from 'react-timestamp';

// components
import NewBookForm from './NewBookForm'

class Popup extends React.Component {

  constructor(props){
    super(props);
    this.state={
      book_id: "",
      books:[],
      user_id: null
    }
    this.editDelete = this.editDelete.bind(this);
  }

  getBooks(){
    let that = this
    axios.get('/api/books', {
    })
    .then(function(response){
      that.setState({
        books:response.data
      })
    })
    .catch(function(error){
      console.log(error)
    })
  }


  componentDidMount(){
    this.getBooks()
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

  editDelete(book){
    let bindBook = this.deleteTheBook.bind(this, book)

    if(this.state.user_id == book.user_id){
      return(
        <div>
          <button className="btn btn-primary" onClick={bindBook}>Delete</button>
        </div>
        )
    }
  }

  deleteTheBook(book, e) {
    e.preventDefault();
    let that = this
    axios.delete(`/api/books/${book.id}`, {
      book: book.id
    })
    .then(function(response){
      that.getBooks();
    })
    .catch(function(error){
      console.log(error)
    })
  }

  renderBooks(){
    let that = this
      return this.state.books.map((book, index)=>{
        const countryUl = <ul><li>{book.country}</li></ul>
        if(book.country == this.props.country.props.children.countryName){
          return(
            <article className="popupContainer" key={book.id} style={styles.article}>
                <p className="bookTitle">{book.title}</p>
                <p className="bookAuthor">{book.author}</p>
                <p className="bookDescription">{book.description}</p>
                <p>{book.user_id}</p>
                <div>{this.editDelete(book)}</div>
                <p className="bookCreatedAt"><Timestamp time={book.created_at} format='full'/></p>
            </article>
            )
        }
      })
  }

  renderNewBookForm(){
    if (this.props.currentUser !== null){
      return (
          <div>
            <NewBookForm
            currentUser = {this.props.currentUser}
            country={this.props.country.props.children.countryName}
            getBooks = {this.getBooks()}
            />
          </div>
          )
    }
  }

  componentWillMount(){
    this.getBooks()
  }

  render() {
    return (
      <div className='popup'>
        <div className='popupInner' >
            <h2 className="countryName">{this.props.country.props.children.countryName}</h2>
            {this.renderNewBookForm()}
            <h3 className='renderBooksClass'>{this.renderBooks()}</h3>
            <button  className="btn btn-primary" onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}


export default Popup