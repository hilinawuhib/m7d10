import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";

function Homepage() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=ff423470cf7e0d528a0c86467a543e4b`
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setWeather(data);
    } else {
      console.log("error");
    }
  };

  const dates = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              className="search-bar"
              placeholder="Enter City"
              onChange={handleChange}
              value={query}
            />
          </Form.Group>
        </Form>
      </div>
      {typeof weather.main != "undefined" ? (
        <div className="container">
          <Card style={{ width: "18rem", justifyContent: "center" }}>
            <Card.Body>
              <Card.Title>
                City: {weather.name}, {weather.sys.country}
              </Card.Title>
              <Card.Text>
                latitude: {weather.coord.lat}, longitude:{weather.coord.lon}
              </Card.Text>
              <Card.Text>
                Temprature:{weather.main.temp}°c,feels like:
                {weather.main.feels_like}
              </Card.Text>
              <Card.Text>Humidity:{weather.main.humidity}°c</Card.Text>
              <Card.Text>{weather.weather[0].main}</Card.Text>
              <Card.Text>
                Wind: {weather.wind.deg}°,{weather.wind.speed}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Homepage;
