import React, {Component} from 'react';
import axios from 'axios';
import Timestamp from 'react-timestamp';

// components
import NewBookForm from './NewBookForm'
class Popup extends React.Component {

  constructor(props){
    super(props);
    this.state={
      books:[]
    }
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

  renderBooks(){
    let that = this
    return this.state.books.map((book, index)=>{
      const countryUl = <ul><li>{book.country}</li></ul>
      if(book.country == this.props.country.props.children.countryName){
        return(
          <article key={book.id} style={styles.article}>
            <div style={styles.container}>
              <p>{book.votes.value}</p>
              <p style={styles.articleTitle}>{book.title}</p>
              <p style={styles.articleAuthor}>{book.author}</p>
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
            {this.renderNewBookForm()}
            <h3>{this.renderBooks()}</h3>
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
  }
}

export default Popup