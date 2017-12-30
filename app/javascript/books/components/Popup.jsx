import React, {Component} from 'react';

class Popup extends React.Component {

  constructor(props){
    super(props);
    }

  componentWillMount(){
    console.log(this.props.country)
    console.log("This is the string:" + toString(this.props.country))
  }

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <h2>{this.props.country.props.children}</h2>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup