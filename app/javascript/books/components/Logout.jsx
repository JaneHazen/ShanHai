import React, {Component} from 'react';
import 'axios' from 'axios';

class Logout extends React.Component {

  constructor(props){
    super(props);
  }

  handleLogout(e) {
    e.preventDefault();
    var that = this;

    $.ajax({
      type: "Delete",
      url: "http://localhost:3000/users/sign_out",
      dataType: "json",
      error: function (error) {
        console.log(error);
      },
      success: function (res) {
        that.props.changePage("login");
      },
    });
  }

  render() {
    return (
      <button onClick={this.handleLogout}>Sign Out</button>
    );
  };
}

export default Logout