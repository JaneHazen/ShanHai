import React, {Component} from 'react';
import  {geoMercator, geoPath} from 'd3-geo'
import {feature} from 'topojson-client'
// import {Link} from 'react-router-dom';
// import queryString from 'query-string';
// import axios from 'axios';
import CountryDirectory from './CountryDirectory'
import Popup from './Popup'

class Map extends Component {

  constructor(props){
    super(props);
    this.state = {
      worldData: [],
      showPopup: false,
      targetCountry: []
    }
    this.handleCountryClick = this.handleCountryClick.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  togglePopup(country){
    if(country){
      this.setState({
        showPopup:!this.state.showPopup,
        targetCountry: country
      })
    } else {
      this.setState({
        showPopup: !this.state.showPopup,
        targetCountry: []
      })
    }
  }

  findCountryName(countryIndex){
    const countryDirectory = CountryDirectory
    return (
      <ul>
        {countryDirectory.find(function(code, i){
          if(code.countryCode === countryIndex.id){
             return <li key={i}>{code.countryName}</li>
            }
        })}
      </ul>
    )


  }

  handleCountryClick(countryIndex) {
    const country = this.findCountryName(this.state.worldData[countryIndex])
    this.togglePopup(country)
  }

  handleColorChange(countryIndex) {
    const colors = `rgba(38,50,56, ${1/this.state.worldData.length * countryIndex})`
    if(this.props.currentUser != null) {
      return "red"
    }else {
      return colors
    }
  }

  projection() {
    return geoMercator()
    .scale(100)
    .translate([800/2, 450/2])
  }

  componentDidMount(){
    fetch("/world-110m.json")
    .then(response => {
      if(response.status !== 200){
        console.log(`Oh noes! ${response.status}`)
        return
      }
      response.json().then(worldData=>{
        this.setState({
          worldData:feature(worldData, worldData.objects.countries).features,
        })
      })
    })
  }


  render(){
    return(
      <div>
      <svg width={800} height={450} viewBox="0 0 800 450" className="daMap">
        <g className="countries">
          {
            this.state.worldData.map((d, i)=> (
              <path
                key = { `path-${i}`}
                d = { geoPath().projection(this.projection())(d) }
                className="country"
                onClick = { () => this.handleCountryClick(i)}
                fill= {`${this.handleColorChange(i)}`}
                stroke= "#FFFFFF"
                strokeWidth= { 0.5}
              />
            ))
          }
        </g>

      </svg>
      {this.state.showPopup ?
        <Popup
          text='Close Me'
          country = {this.state.targetCountry}
          closePopup={this.togglePopup.bind(this)}
          currentUser = {this.props.currentUser}
        />
        : null
      }
      </div>
      )
  }
}

export default Map