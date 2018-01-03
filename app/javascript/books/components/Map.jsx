import React, {Component} from 'react';
import  {geoMercator, geoPath} from 'd3-geo'
import {feature} from 'topojson-client'
// import {Link} from 'react-router-dom';
// import queryString from 'query-string';
// import axios from 'axios';
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
    const countryDirectory = [
    { "countryCode":"840", "countryName": "United States"},
    { "countryCode":"124", "countryName": "Canada"},
    { "countryCode":"484", "countryName": "Mexico"},
    { "countryCode":"320", "countryName":"Guatemala"},
    { "countryCode":"084", "countryName":"Belize"},
    { "countryCode":"340", "countryName":"Honduras"},
    { "countryCode":"222", "countryName":"El Salvador"},
    { "countryCode":"558", "countryName":"Nicaragua"},
    { "countryCode":"188", "countryName":"Costa Rica"},
    { "countryCode":"591", "countryName":"Panama"},
    { "countryCode":"170", "countryName":"Columbia"},
    { "countryCode":"862", "countryName":"Venezuela"},
    { "countryCode":"328", "countryName":"Guyana"},
    { "countryCode":"740", "countryName":"Suriname"},
    { "countryCode":"250", "countryName":"French Guiana"},
    { "countryCode":"076", "countryName":"Brazil"},
    { "countryCode":"218", "countryName":"Ecuador"},
    { "countryCode":"604", "countryName":"Peru"},
    { "countryCode":"068", "countryName":"Bolivia"},
    { "countryCode":"152", "countryName":"Chile"},
    { "countryCode":"032", "countryName":"Argentina"},
    { "countryCode":"600", "countryName":"Paraguay"},
    { "countryCode":"858", "countryName":"Uruguay"},
    { "countryCode":"238", "countryName":"Falkland Islands"},
    { "countryCode":"044", "countryName":"Bahamas"},
    { "countryCode":"192", "countryName":"Cuba"},
    { "countryCode":"388", "countryName":"Jamaica"},
    { "countryCode":"332", "countryName":"Haiti"},
    { "countryCode":"214", "countryName":"Dominican Republic"},
    { "countryCode":"630", "countryName":"Puerto Rico"},
    { "countryCode":"504", "countryName":"Morocco"},
    { "countryCode":"732", "countryName":"Western Sahara"},
    { "countryCode":"012", "countryName":"Algeria"},
    { "countryCode":"788", "countryName":"Tunisia"},
    { "countryCode":"434", "countryName":"Libya"},
    { "countryCode":"478", "countryName":"Mauritania"},
    { "countryCode":"466", "countryName":"Mali"},
    { "countryCode":"562", "countryName":"Niger"},
    { "countryCode":"148", "countryName":"Chad"},
    { "countryCode":"686", "countryName":"Senegal"},
    { "countryCode":"270", "countryName":"Gambia"},
    { "countryCode":"624", "countryName":"Guinea-Bissau"},
    { "countryCode":"324", "countryName":"Guinea"},
    { "countryCode":"694", "countryName":"Sierra Leone"},
    { "countryCode":"430", "countryName":"Liberia"},
    { "countryCode":"384", "countryName":"Cote D'Iovire"},
    { "countryCode":"288", "countryName":"Ghana"},
    { "countryCode":"768", "countryName":"Togo"},
    { "countryCode":"204", "countryName":"Benin"},
    { "countryCode":"854", "countryName":"Burkina Faso"},
    { "countryCode":"562", "countryName":"Niger"},
    { "countryCode":"566", "countryName":"Nigeria"},
    { "countryCode":"148", "countryName":"Chad"},
    { "countryCode":"120", "countryName":"Cameroon"},
    { "countryCode":"140", "countryName":"Central African Republic"},
    { "countryCode":"226", "countryName":"Equatorial Guinea"},
    { "countryCode":"266", "countryName":"Gabon"},
    { "countryCode":"178", "countryName":"Republic of the Congo"},
    { "countryCode":"180", "countryName":"Democratic Republic of the Congo"},
    { "countryCode":"024", "countryName":"Angola"},
    { "countryCode":"894", "countryName":"Zambia"},
    { "countryCode":"516", "countryName":"Namibia"},
    { "countryCode":"710", "countryName":"South Africa"},
    { "countryCode":"426", "countryName":"Lesothos"},
    { "countryCode":"072", "countryName":"Botswana"},
    { "countryCode":"748", "countryName":"Swaziland"},
    { "countryCode":"716", "countryName":"Zimbabwe"},
    { "countryCode":"508", "countryName":"Mozambique"},
    { "countryCode":"894", "countryName":"Zambia"},
    { "countryCode":"454", "countryName":"Malawi"},
    { "countryCode":"450", "countryName":"Madagascar"},
    { "countryCode":"834", "countryName":"Tanzania"},
    { "countryCode":"108", "countryName":"Burundi"},
    { "countryCode":"646", "countryName":"Rwanda"},
    { "countryCode":"800", "countryName":"Uganda"},
    { "countryCode":"404", "countryName":"Kenya"},
    { "countryCode":"706", "countryName":"Somalia"},
    { "countryCode":"-99", "countryName":"Djibouti"},
    { "countryCode":"231", "countryName":"Ethiopia"},
    { "countryCode":"232", "countryName":"Eritrea"},
    { "countryCode":"728", "countryName":"South Sudan"},
    { "countryCode":"729", "countryName":"Sudan"},
    { "countryCode":"818", "countryName":"Egypt"},
    { "countryCode":"826", "countryName":"United Kingdom"},
    { "countryCode":"372", "countryName":"Ireland"},
    { "countryCode":"620", "countryName":"Portugal"},
    { "countryCode":"724", "countryName":"Spain"},
    { "countryCode":"250", "countryName":"France"},
    { "countryCode":"756", "countryName":"Switzerland"},
    { "countryCode":"442", "countryName":"Luxembourg"},
    { "countryCode":"056", "countryName":"Belgium"},
    { "countryCode":"528", "countryName":"Netherlands"},
    { "countryCode":"276", "countryName":"Germany"},
    { "countryCode":"040", "countryName":"Austria"},
    { "countryCode":"380", "countryName":"Italy"},
    { "countryCode":"208", "countryName":"Denmark"},
    { "countryCode":"578", "countryName":"Norway"},
    { "countryCode":"752", "countryName":"Sweden"},
    { "countryCode":"246", "countryName":"Finland"},
    { "countryCode":"233", "countryName":"Estonia"},
    { "countryCode":"428", "countryName":"Latvia"},
    { "countryCode":"440", "countryName":"Lithuania"},
    { "countryCode":"616", "countryName":"Poland"},
    { "countryCode":"203", "countryName":"Czech Republic"},
    { "countryCode":"703", "countryName":"Slovakia"},
    { "countryCode":"112", "countryName":"Belarus"},
    { "countryCode":"804", "countryName":"Ukraine"},
    { "countryCode":"498", "countryName":"Moldova"},
    { "countryCode":"348", "countryName":"Hungary"},
    { "countryCode":"705", "countryName":"Slovenia"},
    { "countryCode":"191", "countryName":"Croatia"},
    { "countryCode":"070", "countryName":"Bosnia and Herzegowina"},
    { "countryCode":"688", "countryName":"Serbia"},
    { "countryCode":"499", "countryName":"Montenegro"},
    { "countryCode":"008", "countryName":"Albania"},
    { "countryCode":"300", "countryName":"Greece"},
    { "countryCode":"807", "countryName":"Republic of Macedonia"},
    { "countryCode":"100", "countryName":"Bulgaria"},
    { "countryCode":"792", "countryName":"Turkey"},
    { "countryCode":"196", "countryName":"Cyprus"},
    { "countryCode":"643", "countryName":"Russia"},
    { "countryCode":"268", "countryName":"Georgia"},
    { "countryCode":"031", "countryName":"Azerbaijan"},
    { "countryCode":"051", "countryName":"Armenia"},
    { "countryCode":"760", "countryName":"Syria"},
    { "countryCode":"422", "countryName":"Lebanon"},
    { "countryCode":"275", "countryName":"Palestine"},
    { "countryCode":"376", "countryName":"Israel"},
    { "countryCode":"400", "countryName":"Jordan"},
    { "countryCode":"368", "countryName":"Iraq"},
    { "countryCode":"364", "countryName":"Iran"},
    { "countryCode":"414", "countryName":"Kuwait"},
    { "countryCode":"682", "countryName":"Saudi Arabia"},
    { "countryCode":"634", "countryName":"Qatar"},
    { "countryCode":"784", "countryName":"United Arab Emirates"},
    { "countryCode":"512", "countryName":"Oman"},
    { "countryCode":"887", "countryName":"Yemen"},
    { "countryCode":"398", "countryName":"Kazakhstan"},
    { "countryCode":"860", "countryName":"Uzbekistan"},
    { "countryCode":"795", "countryName":"Turkmenistan"},
    { "countryCode":"004", "countryName":"Afghanistan"},
    { "countryCode":"586", "countryName":"Pakistan"},
    { "countryCode":"417", "countryName":"Kyrgzstan"},
    { "countryCode":"716", "countryName":"Tajikistan"},
    { "countryCode":"586", "countryName":"Pakistan"},
    { "countryCode":"356", "countryName":"India"},
    { "countryCode":"156", "countryName":"China"},
    { "countryCode":"496", "countryName":"Mongolia"},
    { "countryCode":"524", "countryName":"Nepal"},
    { "countryCode":"064", "countryName":"Bhutan"},
    { "countryCode":"050", "countryName":"Bangladesh"},
    { "countryCode":"144", "countryName":"Sri Lanka"},
    { "countryCode":"104", "countryName":"Myanmar"},
    { "countryCode":"764", "countryName":"Thailand"},
    { "countryCode":"418", "countryName":"Laos"},
    { "countryCode":"704", "countryName":"Vietnam"},
    { "countryCode":"116", "countryName":"Cambodia"},
    { "countryCode":"458", "countryName":"Malaysia"},
    { "countryCode":"608", "countryName":"Philippines"},
    { "countryCode":"360", "countryName":"Indonesia"},
    { "countryCode":"458", "countryName":"Brunei"},
    { "countryCode":"408", "countryName":"North Korea"},
    { "countryCode":"410", "countryName":"South Korea"},
    { "countryCode":"392", "countryName":"Japan"},
    { "countryCode":"036", "countryName":"Australia"},
    { "countryCode":"554", "countryName":"New Zealand"},
    { "countryCode":"304", "countryName":"Greenland"},
    { "countryCode":"010", "countryName":"Antarctica"},
    { "countryCode":"352", "countryName":"Iceland"},
      ]

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
    console.log(`Clicked on this country ${country} country: `, this.state.worldData[countryIndex])
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
      {this.state.showPopup ?
        <Popup
          text='Close Me'
          country = {this.state.targetCountry}
          closePopup={this.togglePopup.bind(this)}
        />
        : null
      }
      </div>
      )
  }
}

export default Map