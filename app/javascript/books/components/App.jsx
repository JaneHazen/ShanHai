import React from 'react';
import axios from 'axios';
import '../application.css';


// components
import Map from './Map';
import Header from './Header';



class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }



  updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
  }

  render(){
    return (
      <div>
        <Header updateCurrentUser={this.updateCurrentUser}
        currentUser = {this.state.currentUser}/>
        <Map currentUser = {this.state.currentUser}/>
      </div>
    )
  }

}

export default App