import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'


class Logout extends React.Component {

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    let that = this
    let email = this.props.currentUser
    axios.delete('/users/sign_out', {
      email
    })
    .then(function(response){
    })
    .catch(function(error){
      console.log(error)
    })
  }

  render() {
    return (
      <div >
        <button className="btn navbar-btn" onClick={this.handleLogout}>Sign Out</button>
      </div>
    );
  };
}

export default Logout