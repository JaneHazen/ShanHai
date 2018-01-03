import React, {Component} from 'react';
import axios from 'axios';

class Popup extends React.Component {

  constructor(props){
    super(props);
    this.state={
      books:[]
    }
  }

  componentWillMount(){
    this.props.country
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
    return this.state.books.map((book, index)=>{
      const countryUl = <ul><li>{book.country}</li></ul>
      console.log("<3")
      console.log(this.props.country.props.children.countryName)
      console.log(book.country)
      if(book.country == this.props.country.props.children.countryName){
        return(
          <div key={book.id}>
            <p>{book.title}</p>
            <p>{book.author}</p>
          </div>
          )
      }
    })
  }

  componentWillMount(){
    this.getBooks()
  }

  render() {
    return (
      <div className='popup' style={styles.popup}>
        <div className='popup_inner' style={styles.popupinner}>
          <h1>{this.props.country.props.children.countryName}</h1>
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
  }
}

export default Popup