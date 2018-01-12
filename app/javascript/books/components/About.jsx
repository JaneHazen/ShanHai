import React from 'react';
import Header from './Header';


class About extends React.Component {

  render(){
    return(
      <div>
        <Header
            currentUser={this.props.currentUser}
            updateCurrentUser={this.props.updateCurrentUser}
          />
        About
      </div>
      )
  }
};

export default About