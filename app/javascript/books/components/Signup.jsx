import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signupUnsuccessful:false,
    }
    this.handleSignup = this.handleSignup.bind(this);
  }



  handleSignup(e) {
    e.preventDefault();
    let that = this
    let email = document.getElementById("email").value
    axios.post('/users', {
      user: {
        email: email,
        password: document.getElementById("password").value,
        password_confirmation: document.getElementById("password_confirmation").value
      }
    })
    .then(function(response){
      that.props.updateCurrentUser(email);
    })
    .catch(function(error){
      console.log(error)
    })

  }



  render() {

    return (
      <div>
        <h2>Signup</h2>
        <form>
          <input id="email" placeholder="email"/>
          <input id="password" placeholder="password"/>
          <input id="password_confirmation" placeholder="retype password"/>
          <button onClick={this.handleSignup}>Submit</button>
        </form>
        <Link to="/"><button>Back to Login</button></Link>

      </div>
    );
  };
};

export default Signup