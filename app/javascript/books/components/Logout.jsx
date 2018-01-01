import React, {Component} from 'react';
import axios from 'axios';

class Logout extends React.Component {

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e) {
    e.preventDefault();
    var that = this
    var email = this.props.currentUser
    axios.delete('users/sign_out',{
      email: email
    })
    .then(function(response){
      that.props.changePage("login")
    })
    .catch(function(error){
      console.log(error)
    })
  }

  render() {
    return (
      <button onClick={this.handleLogout}>Sign Out</button>
    );
  };
}

export default Logout