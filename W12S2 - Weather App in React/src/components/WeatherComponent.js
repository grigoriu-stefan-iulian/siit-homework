import React from 'react'

const WeatherComponent = (props) => (
    <div>
        <form onSubmit={props.getWeather}>
            <label>Celsius
            <input id="celsius" type="radio" name="temp"></input>
            </label>
            <br />
            <label>Fahrenheit
            <input id="fahrenheit" type="radio" name="temp"></input>
            </label>
            <br />
            <button>Show Temperature</button>
            <h3>Temperature: {props.tempToDisplay}</h3>
        </form>
    </div>
)

export default WeatherComponent