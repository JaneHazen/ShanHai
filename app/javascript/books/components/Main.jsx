import React from 'react';

import Header from './Header';
import Map from './Map';


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
      </div>
      )
  }
};

export default Main