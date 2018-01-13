import React from 'react';

import Header from './Header';

import Searchbar from './containers/searchbar';
import ListOfBooks from './containers/list_of_books'
import NewBookForm from './NewBookForm'


class Search extends React.Component {

  addbook(){
    if(this.props.currentUser != null){
      return(
          <NewBookForm
            currentUser={this.props.currentUser}
          />
        )
    }
  }

  render(){
    return(
      <div>
        <Header
            currentUser={this.props.currentUser}
            updateCurrentUser={this.props.updateCurrentUser}
        />
        {this.addbook()}
        <h4>Search Books By Country:</h4> <Searchbar/>
        <br/>
        <ListOfBooks/>
      </div>
      )
  }
};

export default Search;