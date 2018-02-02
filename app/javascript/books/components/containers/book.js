import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {getBook, clearDetail} from '../actions';
import {bindActionCreators} from 'redux';
import Timestamp from 'react-timestamp';
import axios from 'axios';

import Header from '../Header';
import Comments from '../Comments';



class Book extends Component {
  constructor(props){
    super(props);
    this.state={
      user_id : null
    }
  }

  componentWillMount(){
    let that = this
    axios.get('/pages/are_we_there_yet',{
    })
    .then(function(response){
      if(response.data){
        console.log("GOT A REPONSES", response.data.id)
        that.setState({
          user_id: response.data.id
        })
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }

  componentDidMount(){
    const {id } = this.props.match.params
    this.props.getBook(id);
  }

  componentWillUnmount(){
    this.props.clearDetail();
  }



  renderBook = () => {
      const {book} = this.props;

      if (!book){
        return <div>Loading...</div>;
      }

      return (
        <div key={book.id} className="bookBox">
          <div className="container">
            <article className="popupContainer" key={book.id}>
              <h2>{book.author}</h2>
              <h3>{book.description}</h3>
              <p>{book.user_id}</p>
              <p className="bookCreatedAt"><Timestamp time={book.created_at} format='full'/></p>
            </article>
          </div>
        </div>
      );
  }


  render(){
    return(
        <div>
          <Header
            currentUser={this.props.currentUser}
            updateCurrentUser={this.props.updateCurrentUser}
          />
          {this.renderBook()}
          <Comments
            currentUser={this.props.currentUser}
            this_book_id={this.props.location.pathname.toString().slice(7)}
          />
        </div>
      )
  }
}

function mapStateToProps({ books }, ownProps){
  return{
    book:books[ownProps.match.params.id]
  }
}


export default connect(mapStateToProps, { getBook })(Book);