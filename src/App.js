import React from 'react'
import './App.css'

const api = {
  key: '47c14f3735949f7eeafc6f7529fa9b61',
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={47c14f3735949f7eeafc6f7529fa9b61}'
}
function App() {
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
          />
        </div>
        <div className="location-box">

        </div>
        <div className="date">{dateBuilder(new Date())}</div>
      </main>
    </div>
  )
}

export default App
