import React, {Component} from 'react';
import axios from 'axios';

import NewCommentForm from './NewCommentForm'


class Comments extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      user_id: null,
      comments: []
    };

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


  componentDidMount(){
    this.getComments()
    let that = this
    axios.get('/pages/are_we_there_yet',{
    })
    .then(function(response){
      if(response.data.email){
        that.setState({
          user_id: response.data.id
        })
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }

  componentWillMount(){
    this.getComments()
  }


  renderComments(){
    const this_book = this.props.book_id
    if(this.state.comments.length > 0){
      return this.state.comments.map((comment, index)=>{
        if(comment.book_id == this_book){
          return(
            <li key={comment.id}>
              <article className="card" >
                <h3 className="card-title">{comment.comment}</h3>
                <p>{comment.user_id}</p>
              </article>
            </li>
          )
        }
      })
    }
  }

  renderNewCommentForm(){
    if(this.props.currentUser !== null){
      return(
        <div>
          <NewCommentForm
            currentUser = {this.props.currentUser}
            book_id = {this.props.book_id}
            getComments = {this.getComments()}
          />
        </div>
        )
    }
  }



  render(){
    return(
      <div>
        {this.renderNewCommentForm()}
        <div>
          <ul className="booksUl">
            {this.renderComments()}
          </ul>
        </div>
      </div>
      )
  }
}

export default Comments