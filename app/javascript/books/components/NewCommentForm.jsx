import React, {Component} from 'react';
import axios from 'axios';

import {connect} from 'react-redux';
import {getComments} from './actions';
import {bindActionCreators} from 'redux';

import ListOfComments from './containers/list_of_comments'



class NewCommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comment:'',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e){
    e.preventDefault()
    console.log("PROPS", this.props.currentUser)
    let that = this
    axios.post('/booklists',{
        user_id: that.props.currentUser,
        book_id: that.props.book_id,
        comment: that.state.comment
    })
    .then(function(response){
      console.log(response);
      console.log(that.state.comments)
      console.log("FUNCTION RESPONSE TO COMMENT SUBMIT")
    })
    .catch(function(error){
      console.log(error);
    })
  }

    handleInputChange(e){
    let target = e.target;
    let name = target.name
    let value = target.value
    this.setState({
      [name]: value
    })
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <fieldset>
              <label>
              <h3>Add a Comment</h3>
                <input name="comment" placeholder="comment" type="textbox" defaultValue="" onChange={this.handleInputChange}/> <br/>
                <input type="submit" onChange={this.handleSubmit} />
              </label>
            </fieldset>
          </form>
          <ListOfComments/>
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
  return bindActionCreators({getComments},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCommentForm)

