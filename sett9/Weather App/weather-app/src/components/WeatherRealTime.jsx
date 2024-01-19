import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Sunny from '../assets/sunny.png';
import Snow from '../assets/snow.png';
import Cloudy from '../assets/cloudy.png';
import Rain from '../assets/rain.png';


function WeatherRealTime({cityName}) {
    const [location, setLocation] = useState({});
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const url = `http://api.openweathermap.org//data/2.5/weather?q=${cityName}&limit=2&units=metric&appid=9eca11d3019f2652eec516e76a720461`;
    
        try {
          const response = await fetch(url);
          const jsonData = await response.json();
          setLocation(jsonData);
          console.log(jsonData);
        } catch (err) {
          console.log(err);
        }
      };
    return(
        <Row className="my-3">
            <Col>
                <p className="fw-bold display-4">{location.name}, <span>{location.sys?.country}</span></p> 
                <p className="fw-bold display-6">{location.main?.temp}°C</p>
                <p className=" fs-5">{location.weather ? location.weather[0].description.charAt(0).toUpperCase() + location.weather[0].description.slice(1) : ""}</p>
             
                
               
            </Col>
        </Row>
    )

}

export default WeatherRealTime;