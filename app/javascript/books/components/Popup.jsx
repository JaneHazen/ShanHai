import React, {Component} from 'react';

class Popup extends React.Component {

  constructor(props){
    super(props);
    }

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.country.props.children}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup