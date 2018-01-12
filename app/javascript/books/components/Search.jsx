import React from 'react';
import Header from './Header';


class Search extends React.Component {

  render(){
    return(
      <div>
        <Header
            currentUser={this.props.currentUser}
            updateCurrentUser={this.props.updateCurrentUser}
          />
        Search
      </div>
      )
  }
};

export default Search;