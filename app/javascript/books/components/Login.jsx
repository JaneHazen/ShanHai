import React, {Component} from 'react';
import axios from 'axios';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loginUnsuccessful:false,
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.changePage = this.props.changePage.bind(this);
    this.updateCurrentUser = this.props.updateCurrentUser.bind(this);
    this.updateLoginError = this.updateLoginError.bind(this)
  }

  updateLoginError() {
    this.setState({
      loginUnsuccessful: true
    });
  }

  handleLogin(e) {
    e.preventDefault();
    var that = this

    axios.post('/users/sign_in', {
        user: {
          email: document.getElementById("email").value,
          password: document.getElementById("password").value
        }
      })
      .then(function(response){
        console.log(that)
        console.log(that.props)
        that.props.changePage("edit");
        that.props.updateCurrentUser(response.email);
      })
      .catch(function(error) {
        that.updateLoginError();
        console.log(error);
      });

  }



  render() {
    var errorClass = this.state.loginUnsuccessful ? "hidden" : ""
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