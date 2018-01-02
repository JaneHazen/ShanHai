import React from 'react';
import axios from 'axios';

// components
import Map from './Map';
import Header from './Header'


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
      console.log("THIS IS THE RESPONSE");
      console.log(response);
      console.log(response.data.email);
      that.setState({
        currentUser: response.data.email
      })
    })
    .catch(function(error){
      console.log(error);
    })
  }

  updateCurrentUser(email) {
    console.log("we got to the update")
    console.log(email)
    this.setState({
      currentUser: email
    })
  }

  render(){
    return (
      <div>
        <Header updateCurrentUser={this.updateCurrentUser}/>
        <Map/>
      </div>
    )
  }

}

export default App