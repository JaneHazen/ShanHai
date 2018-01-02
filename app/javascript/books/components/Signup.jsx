import React, {Component} from 'react';
import axios from 'axios';

class Signup extends React.Component {
  constructor(){
    super();
    this.state = {
      signupUnsuccessful:false,
    }
    this.handleSignup = this.handleSignup.bind(this);
  }



  handleSignup(e) {
    e.preventDefault();
    var that = this
    var email = document.getElementById("email").value
    axios.post('/users', {
      user: {
        email: email,
        password: document.getElementById("password").value,
        password_confirmation: document.getElementById("password_confirmation").value
      }
    })
    .then(function(response){
      that.props.changePage("edit");
      that.props.updateCurrentUser(email);
    })
    .catch(function(error){
      console.log(error)
    })

  }



  render() {
    var errorClass = this.state.signupUnsuccessful ? "" : "hidden"
    return (
      <div>
        <h2>Signup</h2>
        <form>
          <input id="email" placeholder="email"/>
          <input id="password" placeholder="password"/>
          <input id="password_confirmation" placeholder="retype password"/>
          <button onClick={this.handleSignup}>Submit</button>
        </form>
        <p className={errorClass}>There was an error with your signup details</p>
        <button onClick={() => this.props.changePage("login")}>Login!</button>
      </div>
    );
  };
};

export default Signup