import React, {Component} from 'react';
import  {geoMercator, geoPath} from 'd3-geo'
import {feature} from 'topojson-client'
// import {Link} from 'react-router-dom';
// import queryString from 'query-string';
// import axios from 'axios';

class Map extends Component {

  constructor(){
    super();
    this.state = {
      worldData: [],
    }
    this.handleCountryClick = this.handleCountryClick.bind(this)
  }

  handleCountryClick(countryIndex) {
    console.log("Clicked on a country: ", this.state.worldData[countryIndex])
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
      <svg width={800} height={450} viewBox="0 0 800 450">
        <g className="countries">
          {
            this.state.worldData.map((d, i)=> (
              <path
                key = { `path-${i}`}
                d = { geoPath().projection(this.projection())(d) }
                className="country"
                onClick = { () => this.handleCountryClick(i)}
                fill= {`rgba(38,50,56, ${1/this.state.worldData.length * i})`}
                stroke= "#FFFFFF"
                strokeWidth= { 0.5}
              />
            ))
          }
        </g>

      </svg>
      )
  }
}

export default Map