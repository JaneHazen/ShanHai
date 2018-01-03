import React, {Component} from 'react';

class Popup extends React.Component {

  constructor(props){
    super(props);
    }

  render() {
    return (
      <div className='popup' style={styles.popup}>
        <div className='popup_inner' style={styles.popupinner}>
          <h1>{this.props.country.props.children}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

const styles = {
  popup: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    margin: 'auto',
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  popupinner: {
    position: 'absolute',
    left: '25%',
    right: '25%',
    top: '25%',
    bottom: '25%',
    margin: 'auto',
    background: 'white',
  }
}

export default Popup