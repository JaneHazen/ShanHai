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
      <nav className="navbar navbar-inverse" style={{backgroundColor: "#efefef"}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand"><a href="/">ShanHai</a></div>
          </div>
          <ul className="nav navbar-nav">

            <li><Link to="/About">About</Link></li>
            <li><Link to="/Search">Search</Link></li>
            <li><Link to="/Signup">Get Started</Link></li>
            <li>
            <form className="navbar-form navbar-right" role="search">
                <div className="form-group">
                  <input className="form-control" id="email" placeholder="email"/>
                </div>
                <div className="form-group">
                  <input id="password" placeholder="password" type="password" className="form-control"/>
                </div>
                  <button className="btn btn-default" onClick={this.handleLogin}>Login</button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
    );
  };
}



export default Login