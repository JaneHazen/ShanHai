import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getComments } from '../actions'
import { bindActionCreators } from 'redux';


class ListOfComments extends Component {

  listOfComments = ({comments}) =>{
    if(comments){
      return comments.map((comment, index)=>{
        return(
          <li key={comment.id} className="booksLi">
            <article className="card" >
              <h3 className="card-title">{comment.comment}</h3>
              <p>{comment.user_id}</p>
            </article>
          </li>
          )
      })
    }
  }

  render() {
        return (
            <div className="comments">
                <ul className="commentsUl">
                    {this.listOfComments(this.props.comments)}
                </ul>
            </div>
        );
  }

}

function mapStateToProps(state) {
    return {
        comments:state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getComments}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ListOfComments);