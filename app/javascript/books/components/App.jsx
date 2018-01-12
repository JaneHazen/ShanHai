import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route} from 'react-router-dom';



// components
import Header from './Header';
import Main from './Main';
import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'
import About from './About'



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
              <Main {...props}
                component={Main}
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
          <Route exact path="/about" component={About} />
          <Route exact path="/userhome" component={Logout} />

        </div>
      </BrowserRouter>
    )
  }

}

export default App