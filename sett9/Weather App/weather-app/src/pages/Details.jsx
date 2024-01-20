import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sunny from '../assets/sunny.png';
import Snow from '../assets/snow.png';
import Cloudy from '../assets/cloudy.png';
import Rain from '../assets/rain.png';
import WeatherRealTime from "../components/WeatherRealTime";

function RenderDetailPage({FetchData, city}) {

  const { cityName } = useParams();
  const [location, setLocation] = useState(city);

  useEffect(() => {
    FetchData(cityName);
  }, []);


  useEffect(() => {
    setLocation(city);
  }, [city]);


function getWeatherIcon (weather) {
    if (weather.includes("clear")) {
        return <img  className="my-1 " src={Sunny} alt="sunny.png" width={40} />;
      } else if(weather.includes("clouds")){
        return <img className="my-1" src={Cloudy} alt="clouds.png" width={40} />;
      }  else if(weather.includes("snow")){
        return <img  className="my-1" src={Snow} alt="snow.png" width={40} />;
      } else if(weather.includes("rain")){
        return <img  className="my-1" src={Rain} alt="rain.png" width={40} />;
      }
    }

    function FormatData(dt_txt) {
      const date = new Date(dt_txt);
      const day = date.getDate();
      const weekday = date.getDay();
    
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayOfWeekName = daysOfWeek[weekday];
    
      const hour = date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    
      return (<span>{day} {dayOfWeekName} <br /> {hour}</span>);
    }
  return (
      <Container className="m-auto text-center">
        <h4 className="display-5">How Is The Weather in  {location.city?.name}?</h4>


        <WeatherRealTime cityName={cityName} getWeatherIcon={getWeatherIcon}/>


        <Row className="g-0 bg-dark p-2 rounded-4 ">
          <h6 className="text-right text-light">WEATHER FORECAST</h6>
          {
            location.list?.slice(0, 6).map((hour, index) => {
              return (
                <Col xs='4' lg='2' key={index} style={{ fontSize: '14px' }}>
                  {index === 0 ? (
                    <div className="card bg-info card-container " >
                      <b className="mb-2">SHORTLY</b>
                      <b> {hour.weather[0].description}</b>
                      <div>
                          {getWeatherIcon(hour.weather[0].description)}
                      </div>
                      <b>Temperature:</b> {hour.main.temp.toFixed(0)} °C
                    </div>
                  ) : (
                      <Row>
                          <Col>
                          <div className="card card-container " >
                            
                              <p>{FormatData(hour.dt_txt)}</p>
                              <p>{hour.weather[0].description}</p>
                              <div>
                              {getWeatherIcon(hour.weather[0].description)}
                              </div>
                          </div>
                          </Col>
                      </Row>
                  )}
                </Col>
              );
            })
          }
        </Row>
        <Row>
          <Col>
          <Link to='/' className="btn btn-info mt-5">Go Back</Link>
          </Col>
          
        </Row>
      </Container>
  );
}

export default RenderDetailPage;