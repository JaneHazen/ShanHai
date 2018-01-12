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
      <nav className="navbar navbar-inverse" style={{backgroundColor: "#efefef"}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand"><a href="/">ShanHai</a></div>
          </div>
          <ul class="nav navbar-nav">
            <li>
              <form className="navbar-form navbar-right" role="search">
                  <div className="form-group">
                    <input className="form-control" id="email" placeholder="email"/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="password" placeholder="password"/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="password_confirmation" placeholder="retype password"/>
                  </div>
                    <button className="btn btn-default" onClick={this.handleSignup}>Submit</button>
              </form>
            </li>
            <li><Link to="/"><button>Back to Login</button></Link></li>
          </ul>
        </div>
      </nav>
    );
  };
};

export default Signup