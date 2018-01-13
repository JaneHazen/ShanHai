import React from 'react';

import Header from './Header';

import Searchbar from './containers/searchbar';
import ListOfBooks from './containers/list_of_books'


class Search extends React.Component {

  render(){
    return(
      <div>
        <Header
            currentUser={this.props.currentUser}
            updateCurrentUser={this.props.updateCurrentUser}
        />
        <h4>Search Books By Country:</h4> <Searchbar/>
        <br/>
        <ListOfBooks/>
      </div>
      )
  }
};

export default Search;