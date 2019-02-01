import React, { Component } from 'react';
import Header from './Header'
import WeatherComponent from './WeatherComponent'

const apiKey = 'f879a6fb5add7144c7c4e25735eeacee'

class App extends Component {
  state = {
    tempC: undefined,
    tempF: undefined,
    celsiusSelected: undefined,
    fahrenheitSelected: undefined,
    tempToDisplay: undefined
  }

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

  getWeather = async (e) => {
    e.preventDefault()
    const cInput = document.getElementById('celsius')
    const fInput = document.getElementById('fahrenheit')
    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=iasi,romania&appid=${apiKey}&units=metric`)
    const data = await weather.json()
    if (data) {
      this.setState({
        tempC: data.main.temp,
        tempF: data.main.temp * 9 / 5 + 32
      })
    }
    if (cInput.checked) {
      this.setState({
        tempToDisplay: this.state.tempC
      })
    } else if (fInput.checked) {
      this.setState({
        tempToDisplay: this.state.tempF
      })
    }
  }

  componentDidMount() {
    this.handleTempChoise()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <WeatherComponent
          getWeather={this.getWeather}
          tempToDisplay={this.state.tempToDisplay}
        />
      </div>
    );
  }
}

export default App;
