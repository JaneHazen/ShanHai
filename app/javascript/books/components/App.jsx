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
import Search from './Search'
import Book from './containers/book'



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
      if(response.data.id){
        that.setState({
          currentUser: response.data.id
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


  updateCurrentUser(id) {
    this.setState({
      currentUser: id
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
          <Route exact path="/about" render={(props) => (
              <About {...props}
                component={About}
                currentUser={this.state.currentUser}
                updateCurrentUser={this.updateCurrentUser}
              />
          )}/>
          <Route exact path="/search" render={(props) => (
              <Search {...props}
                component={Search}
                currentUser={this.state.currentUser}
                updateCurrentUser={this.updateCurrentUser}
              />
          )}/>
          <Route exact path="/books/:id" render = {(props) =>(
              <Book {...props}
                component={Book}
                currentUser={this.state.currentUser}
                updateCurrentUser={this.updateCurrentUser}
              />
            )}/>
        </div>
      </BrowserRouter>
    )
  }

}

export default App