import React, { useState } from "react";
import axios from "axios";
import "./scss/WeatherForcast.scss";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e278e964f2efa0df451090454c29d7e2`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  const weatherId = data?.weather?.[0]?.id;

  return (
    <div
      className={`${
        weatherId && weatherId === 800
          ? "clear_sky"
          : weatherId && weatherId >= 500 && weatherId <= 531
          ? "rain_sky"
          : weatherId && weatherId >= 200 && weatherId <= 232
          ? "thunder_sky"
          : weatherId && weatherId >= 600 && weatherId <= 622
          ? "snow_sky"
          : weatherId && weatherId >= 701 && weatherId <= 781
          ? "mist_sky"
          : weatherId && weatherId >= 801 && weatherId <= 804
          ? "cloudy_sky"
          : "weather"
      }`}
    >
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter City"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}C°</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()} C°</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
