import React, {Component} from 'react';
import axios from 'axios';
import Timestamp from 'react-timestamp';

class FullBookInfo extends React.Component {
  constructor(props){
    super(props)
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
      console.log("Diditwork?")
    })
    .catch(function(error){
      console.log(error)
    })
  }

  remove(){
    books.splice(this.props.index, 1);
    update();
  },

  editDelete(book){
    let bindBook = this.deleteTheBook.bind(this, book)
    if (this.state.user_id != null){
      return (
        <button onClick = {this.bindBook}>Delete</button>
        )
    }
  }


  render(){
    return (
      <div className="bookInfoContainer">
                <p  className="bookTitle" >{this.props.title}</p>
                <p className="bookAuthor">{this.props.author}</p>
                <p className="bookDescription">{this.props.description}</p>
                <div>{this.editDelete(this.props.book)}</div>
                <p className="bookCreatedAt"><Timestamp time={this.props.created_at} format='full'/></p>
            </div>
      )
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
  }
}

export default FullBookInfo