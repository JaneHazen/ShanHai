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
    if this.state.user_id ==
  }


  render(){
    return (
      <div style={styles.container}>
                <p style={styles.articleTitle}>{this.props.title}</p>
                <p style={styles.articleAuthor}>{this.props.author}</p>
                <p style={styles.articleDescription}>{this.props.description}</p>
                <div>{this.editDelete(this.props.book)}</div>
                <p style={styles.createdAt}><Timestamp time={this.props.created_at} format='full'/></p>

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

export default FullBookInfo