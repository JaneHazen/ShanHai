import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route} from 'react-router-dom';

import '../application.css';


// components
import Map from './Map';
import Header from './Header';
import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'



class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }


  componentDidMount(){
    let that = this
    axios.get('/pages/are_we_there_yet',{
    })
    .then(function(response){
      if(response.data.email){
        that.setState({
          currentUser: response.data.email
        })
      } else {
        that.setState({
          currentUser: null
        })
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }


  updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
  }


  render(){
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={(props) => (
              <Header {...props}
                component={Header}
                currentUser={this.state.currentUser}
                updateCurrentUser={this.updateCurrentUser}
              />
          )}/>
          <Route exact path="/signup" render={(props) => (
              <Signup {...props}
                component={Signup}
                currentUser={this.state.currentUser}
                updateCurrentUser={this.updateCurrentUser}
              />
          )}/>
          <Route exact path="/userhome" component={Logout} />
          <Map currentUser = {this.state.currentUser}/>
        </div>
      </BrowserRouter>
    )
  }

}

export default App