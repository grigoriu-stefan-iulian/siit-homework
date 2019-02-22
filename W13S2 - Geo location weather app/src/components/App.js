import React, { Component } from 'react';
import Header from './Header'
import Quests from './Quests';
import WeatherComponent from './WeatherComponent'

const apiKey = '3155bab6d84360bd16509b1c40a1d4ca'

class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    pressure: undefined,
    humidity: undefined,
    wind: undefined
  }

  // Handles checked radio button
  handleTempChoise() {
    const cInput = document.getElementById('celsius')
    const fInput = document.getElementById('fahrenheit')

    if (localStorage.getItem('temperature') === null || localStorage.getItem('temperature') === 'celsius') {
      cInput.checked = true
    } else if (localStorage.getItem('temperature') === 'fahrenheit') {
      fInput.checked = true
    }
    cInput.addEventListener('click', () => localStorage.setItem('temperature', 'celsius')
    )
    fInput.addEventListener('click', () => localStorage.setItem('temperature', 'fahrenheit'))
  }

  getWeather = async (latitude, longitude) => {
    const cInput = document.getElementById('celsius')
    const fInput = document.getElementById('fahrenheit')
    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
    const data = await weather.json()

    if (data) {
      this.setState({
        city: data.name,
        pressure: `${data.main.pressure} atm`,
        humidity: `${data.main.humidity} %`,
        wind: `${data.wind.speed} m/s`
      })
    }

    if (data && cInput.checked) {
      this.setState({
        temp: data.main.temp,
      })
      this.handleLocationAndWeather()

    } else if (data && fInput.checked) {
      this.setState({
        temp: data.main.temp * 9 / 5 + 32 // Fahrenheit formula
      })
      this.handleLocationAndWeather()
    }
  }

  handleLocationAndWeather = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
    const success = pos => {
      var coord = pos.coords;
      /*
        console.log('Your current position is:');
        console.log(`Latitude : ${coord.latitude}`);
        console.log(`Longitude: ${coord.longitude}`);
        console.log(`More or less ${coord.accuracy} meters.`); 
      */
      this.getWeather(coord.latitude, coord.longitude) // on success run getWeather() with the coords
    }
    const error = err => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  componentDidMount() {
    this.handleTempChoise()
    this.handleLocationAndWeather()
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Quests />
          <WeatherComponent
            temp={this.state.temp}
            city={this.state.city}
            pressure={this.state.pressure}
            humidity={this.state.humidity}
            wind={this.state.wind}
          />
        </div>

      </div>
    );
  }
}

export default App;
