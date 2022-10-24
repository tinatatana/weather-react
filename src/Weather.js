import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Kyiv",
    temperature: "15",
    date: "19/09/2022",
    description: "Sunny",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2580/2580627.png",
    humidity: "80",
    wind: "10",
  };
  return (
    <div className="Weather">
      <div className="container">
        <nav className="navbar bg">
          <div className="container-fluid" Height="100%" Width="100%">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter a city"
                aria-label="Search"
              />
              <button className="btn btn-outline searchButton" type="submit">
                Search
              </button>
              <button className="locationButton">Current location</button>
            </form>
          </div>
        </nav>
      </div>

      <div className="row currentWeather">
        <div className="col">
          <h1>{weatherData.city}</h1>
          <div className="update">Last update:</div>
          <h3>{weatherData.date}</h3>
        </div>
        <div className="col currentDegrees">
          {weatherData.temperature}
          <span className="celcius">°C </span>
          <div>
            <ul className="conditions">
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <img
            className="currentEmoji"
            src={weatherData.imgUrl}
            alt="{weatherData.description}"
            width="100px"
          />
          <div className="weatherDescription">{weatherData.description}</div>
        </div>
      </div>
    </div>
  );
}
