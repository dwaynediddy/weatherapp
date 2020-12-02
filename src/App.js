import React, { useState } from 'react'
import './App.css'
import dateBuilder from './dateBuilder'

const api = {
  key: '47c14f3735949f7eeafc6f7529fa9b61',
  baseUrl: 'https://api.openweathermap.org/data/2.5/'
}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search =evt => {
    if (evt.key === "Enter") {
      fetch(`${api.baseUrl}weather?q=${query}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('')
        console.log(result)
        })
    }
  }

  <dateBuilder />
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ?  (
          <div>
            <div className="date">{dateBuilder(new Date())}</div>
              <div className="location-box">
              {weather.name}, {weather.sys.country}
              </div>
            <div className="weather-box">
              <div className="temp">
              {Math.round(weather.main.temp)}°kelvin(whatevertf that is), {weather.weather[0].description}
              </div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  )
}

export default App
