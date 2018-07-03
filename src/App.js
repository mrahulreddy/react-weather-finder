import React, { Component } from 'react';

import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = "ffa16b3b68d8776621f3cfa26b72eab3";

class App extends Component {

  state = {
    temperature : undefined,
    humidity : undefined,
    descripttion : undefined,
    city : undefined,
    country : undefined,
    error : undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json()
    console.log("data = ",data);
    if(city && country) {
      this.setState({
        temperature : data.main.temp,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        city : data.name,
        country : data.sys.country,
        error : undefined
      })
    } else {
      this.setState({
        temperature : undefined,
        humidity : undefined,
        descripttion : undefined,
        city : undefined,
        country : undefined,
        error : "Please enter city and country"
      })
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temp = {this.state.temperature} 
                    humid = {this.state.humidity}
                    city = {this.state.city}
                    country = {this.state.country}
                    description = {this.state.description}
                    error = {this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;