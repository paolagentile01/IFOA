import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Sunny from '../assets/sunny.png';
import Snow from '../assets/snow.png';
import Cloudy from '../assets/cloudy.png';
import Rain from '../assets/rain.png';



function WeatherRealTime({ cityName,  getWeatherIcon  }) {
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  function ObjectCards({ data}) {
    return (
        <Row className="g-2">
          {Object.entries(data).map(([key, value]) => (
            <Col key={key}>
              <Card className="card-transparent bg-dark text-light">
                <Card.Body>
                  <Card.Title>{key}</Card.Title>
                  <Card.Text>{checkUnit(key, value)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    );
  }
  
  function checkUnit(key, value) {
    if (key.includes("temp") || key.includes("feels")) {
      return `${value.toFixed(0)}°C`;
    } else if (key === "humidity") {
      return `${value}%`;
    } else if (key === "pressure") {
      return `${value} hPa`;
    } else {
      return value;
    }
  }
  const fetchData = async () => {
    const url = `http://api.openweathermap.org//data/2.5/weather?q=${cityName}&limit=2&units=metric&appid=9eca11d3019f2652eec516e76a720461`;

    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setLocation(jsonData);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    isLoading ? null : (
      <Row className="my-3">
        <Col>
          <p className="fw-bold display-4">{location.name}, <span>{location.sys?.country}</span></p>
            {getWeatherIcon(location.weather[0].description)}
          <p className="fw-bold display-6">{location.main?.temp}°C</p>
          <p className="fs-5">{location.weather ? location.weather[0].description.charAt(0).toUpperCase() + location.weather[0].description.slice(1) : ""}</p>

          <h6>Today</h6>
          <ObjectCards data={location.main} />
        </Col>
      </Row>
    )
  );
}

export default WeatherRealTime;