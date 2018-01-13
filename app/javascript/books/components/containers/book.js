import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bookDetail, clearDetail} from '../actions';
import {bindActionCreators} from 'redux';

class Book extends Component {

  componentWillMount(){
    this.props.bookDetail(this.props.match.params.id)
  }

  componentWillUnmount(){
    this.props.clearDetail();
  }

  renderDetail = ({detail}) => {
    if(detail){
      return detail.map((book) => {
        return (
            <div key={book.id} className="book_detail">
              <div className="detailed_book">
                {book.title}
              </div>
              <div className="detailed_answer">
                {book.author}
              </div>
            </div>
          )
      })
    }
  }

  render(){
    return(
        <div>
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