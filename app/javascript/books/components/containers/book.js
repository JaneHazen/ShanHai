import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bookDetail, clearDetail} from '../actions';
import {bindActionCreators} from 'redux';
import Timestamp from 'react-timestamp';


import Header from '../Header';
import Comments from '../Comments';


class Book extends Component {


  componentDidMount(){
    this.props.bookDetail(this.props.match.params.id)
  }

  componentWillUnmount(){
    this.props.clearDetail();
  }

  renderDetail = ({detail}) => {
    if(detail){
        return (
            <div key={detail.id} className="bookBox">
              <div className="container">
                <article className="popupContainer" key={detail.id}>
                  <h1 className="page-header">{detail.title}</h1>
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

  renderCommentForm(){
    if(this.props.currentUser != null) {
      return(
          <Comments
            currentUser={this.props.currentUser}
            book_id = {this.props.match.params.id}
          />
        )
    }
  }

  getComments(){
    let that = this
    axios.get('/booklists', {
    })
    .then(function(response){
      that.setState({
        comments:response.data
      })
    })
    .catch(function(error){
      console.log(error)
    })
  }

  renderComments(){

  }

  render(){
    return(
        <div>
          <Header
            currentUser={this.props.currentUser}
            updateCurrentUser={this.props.updateCurrentUser}
          />
          {this.renderDetail(this.props.books)}
          {this.renderCommentForm()}
          {this.renderComments()}
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
  return bindActionCreators({bookDetail, clearDetail},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)