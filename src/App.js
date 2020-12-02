import React, { useState } from 'react'
import './App.css'
import dateBuilder from './dateBuilder'

const api = {
  //got my api key and the baseUrl of the api
  key: '47c14f3735949f7eeafc6f7529fa9b61',
  baseUrl: 'https://api.openweathermap.org/data/2.5/'
}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search =evt => {
    if (evt.key === "Enter") {

      // see screen shot, baseurl object and key added from api function here
      //taking baseurl and adding my personal api key at the end
      //the query state can be changed so i bring back the results when called
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
    <div className={
      (typeof weather.main != 'undefined') 
    ? ((weather.main.temp > 290) 
    ? 'App-warm' : 'App') 
    : 'App'}
    >
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
              <div className="location-box">
            <div className="date">{dateBuilder(new Date())}</div>
              {weather.name}, {weather.sys.country}
            </div>
            <div className="weather-box">
              <div className="temp">
                {/* figure out how to turn kelvin into c or find celcius */}
                <br></br>
                {Math.round(weather.main.temp)}°kelvin
              </div>
            </div>
            <div className="description">
               {weather.weather[0].description}
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  )
}

export default App
