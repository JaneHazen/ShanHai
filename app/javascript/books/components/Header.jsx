import React, {Component} from 'react';
import {Link} from 'react-router-dom'

// components
import Signup from './Signup'
import Login from './Login'
import Edit from './Edit'

class Header extends React.Component {

  constructor(){
    super();
    this.state = {
      page:"login",
      currentUser:null
    }
    this.changePage = this.changePage.bind(this)
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    })
  }

  updateCurrentUser(email) {
    this.setState({
      currentUser: email
    });
  }

  render() {
    switch(this.state.page) {
      case "signup":
        return <Signup changePage={this.changePage} updateCurrentUser={this.updateCurrentUser}/>
      case "login":
        return <Login changePage={this.changePage}/>
      case "edit":
        return <Edit changePage={this.changePage}/>
    }
  }
}
export default Header