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
        console.log(weather)
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
        <div className="date">{dateBuilder(new Date())}</div>
        <div className="location-box">
          Location
        </div>
        <div className="weather-box">
          20 degrees
        </div>
        <div className="temp">

        </div>
      </main>
    </div>
  )
}

export default App
