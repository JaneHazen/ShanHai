import React, {Component} from 'react';
import axios from 'axios';
import Timestamp from 'react-timestamp';
import { Panel, Button, ButtonToolbar, Modal, OverlayTrigger } from 'react-bootstrap';

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
    this.findVotes = this.findVotes.bind(this);
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
          <button onClick={bindBook}>Delete</button>
        </div>
        )
    }
  }

  deleteTheBook(book, e) {
    e.preventDefault();
    console.log("HEY")
    console.log(book)
    let that = this
    axios.delete(`/api/books/${book.id}`, {
      book: book.id
    })
    .then(function(response){
      that.getBooks();
      console.log("Diditwork?")
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
            <article key={book.id} style={styles.article}>
              <div style={styles.container}>
                <div>{this.findVotes(book)}</div>
                <p style={styles.articleTitle}>{book.title}</p>
                <p style={styles.articleAuthor}>{book.author}</p>
                <p style={styles.articleDescription}>{book.description}</p>
                <p>{book.user_id}</p>
                <div>{this.editDelete(book)}</div>
                <p style={styles.createdAt}><Timestamp time={book.created_at} format='full'/></p>
              </div>
            </article>
            )
        }
      })
  }

  renderNewBookForm(){
    if (this.props.currentUser !== null){
      return (
          <div>
            <NewBookForm currentUser = {this.props.currentUser} country={this.props.country.props.children.countryName}/>
          </div>
          )
    }
  }

  componentWillMount(){
    this.getBooks()
  }

  render() {
    return (
      <div className='popup' style={styles.popup}>
        <div className='popup_inner' style={styles.popupinner}>
            <h2 style={styles.countryName}>{this.props.country.props.children.countryName}</h2>
            <BookList data = {rows}/>
            {this.renderNewBookForm()}
            <h3 className='renderBooksClass'>{this.renderBooks()}</h3>
            <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

const styles = {
  popup: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    margin: 'auto',
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  popupinner: {
    position: 'absolute',
    left: '25%',
    right: '25%',
    top: '25%',
    bottom: '25%',
    margin: 'auto',
    background: 'white',
  },
  countryName: {
    justify: 'center',
    fontSize:'20px'
  },
  article: {
    boxShadow: '0 4px 8px 5px rgba(0,0,0,0.2)',
    transition: '.3s'
  },
  container: {
    padding:'2px 16px'
  },
  articleTitle: {
    display: 'inline',
    fontSize: '20px'
  },
  articleAuthor:{
    fontSize:'15px'
  },
  createdAt:{
    textAlign:'right',
    fontSize:'10px',
    opacity:'.5'
  },
  articleDescription:{
    fontSize:'10px'
  }
}


export default Popup