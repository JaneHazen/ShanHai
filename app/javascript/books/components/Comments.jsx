import React, {Component} from 'react';
import axios from 'axios';

import {connect} from 'react-redux';
import {getComments, clearComments} from './actions';
import {bindActionCreators} from 'redux';


import NewCommentForm from './NewCommentForm'


class Comments extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      user_id: null,
    };
  }



  componentDidMount(){
    this.props.getComments(this.props.this_book_id)
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

  componentWillUnmount(){
    this.props.clearComments()
  }




  renderNewCommentForm(){
    if(this.props.currentUser !== null){
      return(
        <div>
          <NewCommentForm
            currentUser = {this.state.user_id}
            book_id = {this.props.this_book_id}
          />
        </div>
        )
    }
  }



  render(){
    return(
      <div>
        {this.renderNewCommentForm()}
      </div>
      )
  }
}

function mapStateToProps(state){
  return{
    comments:state.comments
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getComments, clearComments},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)