import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// components
import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'

class Header extends React.Component {

  constructor(){
    super();
    this.state = {
      page:"login",
      currentUser:null
    }
    this.changePage = this.changePage.bind(this);
    this.updateCurrentUser = this.updateCurrentUser.bind(this);

  }

  changePage(newPage) {
    this.setState({
      page: newPage
    })
  }

  componentDidMount(){
    var that = this
    axios.get('/pages/are_we_there_yet',{
    })
    .then(function(response){
      console.log("THIS IS THE RESPONSE");
      console.log(response);
      console.log(response.data.email);
      that.setState({
        currentUser: response.data.email
      })
    })
    .catch(function(error){
      console.log(error);
    })
  }

  updateCurrentUser(email) {
    console.log("we got to the update")
    console.log(email)
    this.setState({
      currentUser: email
    })
  }

  render() {
    switch(this.state.page) {
      case "signup":
        return <Signup changePage={this.changePage} updateCurrentUser={this.updateCurrentUser}/>
      case "login":
        return <Login changePage={this.changePage} updateCurrentUser={this.updateCurrentUser}/>
      case "edit":
        return <Logout changePage={this.changePage} updateCurrentUser={this.updateCurrentUser}/>
    }
  }
}
export default Header