import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bookDetail, clearDetail} from '../actions';
import {bindActionCreators} from 'redux';
import Timestamp from 'react-timestamp';


import Header from '../Header';


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
            <div key={detail.id} className="book_detail">
              <article className="popupContainer" key={detail.id}>
                <p className="bookTitle">{detail.title}</p>
                <p className="bookAuthor">{detail.author}</p>
                <p className="bookDescription">{detail.description}</p>
                <p>{detail.user_id}</p>
                <p className="bookCreatedAt"><Timestamp time={detail.created_at} format='full'/></p>
              </article>
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