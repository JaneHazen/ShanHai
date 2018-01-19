import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bookDetail, clearDetail, checkIfRead, markAsRead, markAsUnread} from '../actions';
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
    this.props.bookDetail(this.props.match.params.id)
    this.props.checkIfRead(this.props.location.pathname.toString().slice(7), this.state.user_id)
  }

  componentWillUnmount(){
    this.props.clearDetail();
  }


  renderHeart(is_it_read){
    if(is_it_read){
      {this.props.checkIfRead(this.props.location.pathname.toString().slice(7), this.state.user_id)}
      if(is_it_read.length > 0){
        return(
          <div>
            <span className="glyphicon glyphicon-heart" onClick={ () => this.props.markAsUnread(this.props.location.pathname.toString().slice(7), this.state.user_id)}></span>
          </div>
        )
      } else {
        return(
          <div onClick={ () => this.props.markAsRead(this.props.location.pathname.toString().slice(7), this.state.user_id)}>
            <span className="glyphicon glyphicon-heart-empty" ></span>
          </div>
        )
      }
    }
  }


  renderDetail = ({detail, is_it_read}) => {
    if(detail){
        return (
            <div key={detail.id} className="bookBox">
              <div className="container">
                <article className="popupContainer" key={detail.id}>
                  {this.renderHeart(is_it_read)}
                  <h2>{detail.author}</h2>
                  <h3>{detail.description}</h3>
                  <p>{detail.user_id}</p>
                  <p className="bookCreatedAt"><Timestamp time={detail.created_at} format='full'/></p>
                </article>
              </div>
           </div>
          )
    }
  }


  render(){
    return(
        <div>
          <Header
            currentUser={this.props.currentUser}
            updateCurrentUser={this.props.updateCurrentUser}
          />
          {this.renderDetail(this.props.books)}
          <Comments
            currentUser={this.props.currentUser}
            this_book_id={this.props.location.pathname.toString().slice(7)}
          />
        </div>
      )
  }
}

function mapStateToProps(state){
  return{
    books:state.books
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({bookDetail, clearDetail, checkIfRead, markAsRead, markAsUnread},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)