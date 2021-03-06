import React, {Component} from 'react';
import axios from 'axios';


class NewBookForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      author: '',
      title: '',
      country: '',
      description:'',
      user_id: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getBooks(){
    let that = this
    axios.get('/api/books', {
    })
    .then(function(response){
      that.setState({
        books:response.data
      })
    })
    .catch(function(error){
      console.log(error)
    })
  }

  componentDidMount(){
    this.getBooks()
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

  handleInputChange(e){
    let target = e.target;
    let name = target.name
    let value = target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e){
    console.log(this.state.author)
    e.preventDefault();
    let that = this.state
    axios.post('/api/books',{
        author: that.author,
        title: that.title,
        country: that.country,
        description: that.description,
        user_id: that.user_id

    })
    .then(function(response){
      that.props.getBooks()
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }



  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label>
          <h3>Add a book</h3>
            <input name="title" placeholder="title" type="text" defaultValue="" onChange={this.handleInputChange}/> <br/>
            <input name="author" placeholder="author" type ="text" defaultValue="" onChange={this.handleInputChange}/> <br/>
            <input name="country" placeholder="country" type ="text" defaultValue="" onChange={this.handleInputChange}/> <br/>
            <textarea name="description" placeholder="description" type="text" defaultValue="" onChange={this.handleInputChange}/> <br/>
            <input type="submit" onChange={this.handleSubmit} />
          </label>
        </fieldset>
      </form>
      )
  }
}

export default NewBookForm