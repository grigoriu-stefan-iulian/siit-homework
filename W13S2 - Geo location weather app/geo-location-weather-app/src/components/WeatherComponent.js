import React from 'react'

const WeatherComponent = (props) => (
    <div className="weather">
      
            <label className="weather__label">Celsius
            <input className="weather__label--radio" id="celsius" type="radio" name="temp"></input>
            <span className="weather__label--checkmark"></span>
            </label>
            <label className="weather__label">Fahrenheit
            <input className="weather__label--radio" id="fahrenheit" type="radio" name="temp"></input>
            <span className="weather__label--checkmark"></span>
            </label>
            <h1 className="weather__display">Temperature: {props.temp}</h1>
            <h3>City: {props.city}</h3>
            <h3>Pressure: {props.pressure}</h3>
            <h3>Humidity: {props.humidity}</h3>
            <h3>Wind: {props.wind}</h3>
    </div>
)

export default WeatherComponent