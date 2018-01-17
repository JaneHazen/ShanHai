import React, {Component} from 'react';
import axios from 'axios';


class NewBookForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      book_id: this.props.book_id,
      comment:'',
      user_id: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getComments(){
    let that = this
    axios.get('/booklists', {

    })
    .then(function(response){
      console.log("new comment form comments", response.data)
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



  handleSubmit(e){
    console.log("Book!", this.state.book_id)
    e.preventDefault();
    let that = this.state
    let t_h_i_s = this
    axios.post('/booklists',{
        user_id: that.user_id,
        book_id: that.book_id,
        comment: that.comment
    })
    .then(function(response){
      t_h_i_s.getComments();
      console.log(response);
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
      <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
            <h3>Add a Comment</h3>
              <input name="comment" placeholder="comment" type="textbox" defaultValue="" onChange={this.handleInputChange}/> <br/>
              <input type="submit" onChange={this.handleSubmit} />
            </label>
          </fieldset>
        </form>
      )
  }
}

export default NewBookForm