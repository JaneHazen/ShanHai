import React from 'react';

import Header from './Header';
import Map from './Map';
import Footer from './Footer';


class Main extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Header
          currentUser={this.props.currentUser}
          updateCurrentUser={this.props.updateCurrentUser}
        />
        <Map currentUser={this.props.currentUser} />
        <Footer />
      </div>
      )
  }
};

export default Main