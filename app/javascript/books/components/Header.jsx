import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// components

import Login from './Login'
import Logout from './Logout'





class Header extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log("HEY")
    console.log(this.props.currentUser)
  }


  renderNavBar(){
    if(this.props.currentUser != null){
      console.log(this.props.currentUser)
      return(
        <Logout/>
      )
    }else{
      return(
        <Login/>
      )
    }
  }


  render() {
    return(
        <div>
        {this.renderNavBar()}
        </div>
      )
  }
}
export default Header
