import React, {Component} from 'react';
import axios from 'axios';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      signupUnsuccessful:false,
      currentUser:null
    }
  }

  handleLogin(e) {
    e.preventDefault();
    var that = this;
    var userInfo = {
      user: {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      }
    }

    axios.post('/users/sign_in', {
      data: userInfo})
      .then(function(response){
        that.props.changePage("edit");
        that.props.updateCurrentUser(res.email);
      })
      .catch(function(error) {
        that.updateLoginError(error)
      });

  }

  updateLoginError() {
    this.setState({
      loginUnsuccessful: true
    });
  }


  render() {
    var errorClass = this.state.loginUnsuccessful ? "" : "hidden"
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input id="email" placeholder="email"/>
          <input id="password" placeholder="password"/>
          <button onClick={this.handleLogin}>Submit</button>
        </form>
        <p className={errorClass}>There was an error with your login details</p>
        <button onClick={() => this.props.changePage("signup")}>Sign Up!</button>
      </div>
    );
  };
}

export default Login