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

  renderNavBar(){
    if(this.props.currentUser != null){
      console.log(this.props.currentUser)
      return(
        <Logout updateCurrentUser={this.props.updateCurrentUser}/>
      )
    }else{
      return(
        <Login updateCurrentUser={this.props.updateCurrentUser}/>
      )
    }
  }


  render() {
    return(
      <nav className="navbar navbar-inverse" style={{backgroundColor: "#efefef"}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand"><a href="/">ShanHai</a></div>
          </div>
          <ul class="nav navbar-nav">

            <li><Link to="/About">About</Link></li>
            {this.renderNavBar()}
          </ul>
        </div>
      </nav>
      )
  }
}
export default Header
