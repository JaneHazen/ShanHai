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
    let that = this
    let email = document.getElementById("email").value

    axios.post('/users/sign_in', {
        user: {
          email: document.getElementById("email").value,
          password: document.getElementById("password").value
        }
      })
      .then(function(response){
        that.props.changePage("edit");
        that.props.updateCurrentUser(email);
      })
      .catch(function(error) {
        that.updateLoginError();
        console.log(error);
      });

  }



  render() {
    return (
      <header style={styles.header}>
        <h2>Login</h2>
        <form>
          <input id="email" placeholder="email"/>
          <input id="password" placeholder="password"/>
          <button onClick={this.handleLogin}>Submit</button>
        </form>
        <button onClick={() => this.props.changePage("signup")}>Sign Up!</button>
      </header>
    );
  };
}

const styles = {
  header: {
    borderBottom: '1px solid #e2e2e2',
    padding: '10px',
    textAlign: 'left',
  }
}

export default Login