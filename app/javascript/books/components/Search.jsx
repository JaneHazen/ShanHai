import React from 'react';
import Header from './Header';

import Searchbar from './containers/searchbar';


class Search extends React.Component {

  render(){
    return(
      <div>
        <Header
            currentUser={this.props.currentUser}
            updateCurrentUser={this.props.updateCurrentUser}
          />
          <Searchbar/>
      </div>
      )
  }
};

export default Search;