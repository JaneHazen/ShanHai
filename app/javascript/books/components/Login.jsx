import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


import axios from 'axios';



class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loginUnsuccessful:false,
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.updateLoginError = this.updateLoginError.bind(this)
  }

  updateLoginError() {
    this.setState({
      loginUnsuccessful: true
    });
  }

  handleLogin(e) {
    e.preventDefault();
    let that = this
    let email = document.getElementById("email").value

    axios.post('/users/sign_in', {
        user: {
          email: document.getElementById("email").value,
          password: document.getElementById("password").value
        }
      })
      .then(function(response){
        that.props.updateCurrentUser(email);
      })
      .catch(function(error) {
        that.updateLoginError();
        console.log(error);
      });

  }



  render() {
    return (
      <li >
        <form className="navbar-form navbar-right" role="search">
            <div className="form-group">
              <input className="form-control" id="email" placeholder="email"/>
            </div>
            <div className="form-group">
              <input id="password" placeholder="password" type="password" className="form-control"/>
            </div>
              <button className="btn btn-default" onClick={this.handleLogin}>Submit</button>
        </form>
      </li>
    );
  };
}



export default Login