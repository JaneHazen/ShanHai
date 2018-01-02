import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// components
import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'

class Header extends React.Component {

  constructor(props){
    super(props);
    if (this.props.currentUser == null){
      this.state = {
        page:"login"
      }
    } else{
      this.state = {
        page: "edit"
      }
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    })
  }


  render() {
    switch(this.state.page) {
      case "signup":
        return <Signup changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
      case "login":
        return <Login changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
      case "edit":
        return <Logout changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
    }
  }
}
export default Header